from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.contrib.auth import login, logout
from .forms import SignUpForm
from .models import Project, Task, User
from django.contrib.auth.mixins import LoginRequiredMixin
from django.utils import timezone
from datetime import timedelta
from django.db.models import Count, Q, Prefetch

def homepage_view(request):
    return render(request, 'core/homepage.html')

def signup_view(request):
    if request.user.is_authenticated:
        return redirect("dashboard")
    
    if request.method == "POST":
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect("dashboard")
    else:
        form = SignUpForm()

    return render(request, "core/signup.html", {"form": form})

class DashboardView(LoginRequiredMixin, TemplateView):
    template_name = 'core/dashboard.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        now = timezone.now()
        one_week_ago = now - timedelta(days=7)

        active_projects = Project.objects.filter(status='active') \
            .annotate(
                total_tasks=Count('task'),
                completed_tasks_count=Count('task', filter=Q(task__completed=True))
            ) \
            .prefetch_related(
                Prefetch('team__members', queryset=User.objects.all())
            )
        
        last_week_active = Project.objects.filter(status='active', start_date__range=(one_week_ago, now)).count()

        total_tasks = Task.objects.count()
        completed_tasks = Task.objects.filter(completed=True).count()
        completed_last_week = Task.objects.filter(completed=True, due_date__range=(one_week_ago, now)).count()

        project_progress = []
        for project in active_projects:
            tasks = Task.objects.filter(project=project)
            if tasks.exists():
                project_progress.append(Task.objects.filter(project=project, completed=True).count() / tasks.count() * 100)
        overall_progress = int(sum(project_progress) / len(project_progress)) if project_progress else 0

        overall_progress_last_week = overall_progress - 5

        context.update({
            "active_projects" : active_projects,
            "total_active_projects": active_projects.count(),
            "active_projects_change": self.calculate_change(active_projects.count(), last_week_active),

            "total_completed_tasks": completed_tasks,
            "total_tasks": total_tasks,
            "completed_tasks_change": self.calculate_change(completed_tasks, completed_last_week),

            "overall_progress": overall_progress,
            "overall_progress_change": self.calculate_change(overall_progress, overall_progress_last_week),

            "total_team_members": User.objects.count(),
        })

        return context

    def calculate_change(self, current, previous):
        if previous == 0:
            return 100 if current > 0 else 0
        return round((current - previous) / previous * 100)

def logout_view(request):
    logout(request)
    return redirect('homepage')