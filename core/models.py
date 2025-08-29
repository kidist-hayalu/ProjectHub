from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.username

class Project(models.Model):
    STATUS_CHOICES = {
        ('planning', 'Planning'),
        ('active', 'Active'),
        ('completed', 'Completed'),
        ('on hold', 'On hold'),
    }

    project_name = models.CharField(max_length=100)
    description = models.TextField()
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="Planning")
    start_date = models.DateTimeField()
    deadline = models.DateTimeField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="created_projects")
    team = models.ForeignKey('Team', on_delete=models.CASCADE, related_name="projects")

    def __str__(self):
        return self.project_name

class Task(models.Model):

    STATUS_CHOICES = {
        ('Pending', 'Pending'),
        ('In Progress', 'In Progress'),
        ('Done', 'Done'),
    }

    PRIORITY_CHOICES = {
        ('low', 'low'),
        ('medium', 'medium'),
        ('high', 'high'),
    }

    name = models.CharField(max_length=50)
    description = models.TextField()
    status = models.CharField(max_length=20)
    completed = models.BooleanField(default=False)
    priority = models.CharField(max_length=10)
    due_date = models.DateTimeField()
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        if self.pk:
            original = Task.objects.get(pk=self.pk)
            if not original.completed and self.completed:
                'ActivityLog'.objects.create(
                    user=self.assigned_to,
                    message=f'completed "{self.title}"',
                    icon='check-circle',
                    color='green'
                )
        super().save(*args, **kwargs)

class Team(models.Model):
    name = models.CharField(max_length=50)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    members = models.ManyToManyField(User, related_name="teams")

    def __str__(self):
        return self.name


class ActivityLog(models.Model):
    ICON_CHOICES = [
        ("check-circle", "Check Circle"),
        ("users", "Users"),
        ("bar-chart-3", "Bar Chart 3"),
        ("clock", "Clock"),
        # Add more as needed
    ]

    COLOR_CHOICES = [
        ("green", "Green"),
        ("blue", "Blue"),
        ("purple", "Purple"),
        ("orange", "Orange"),
    ]

    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    message = models.CharField(max_length=255)  # e.g. "completed design review"
    icon = models.CharField(max_length=30, choices=ICON_CHOICES, default="check-circle")
    color = models.CharField(max_length=30, choices=COLOR_CHOICES, default="green")
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-timestamp']

    def __str__(self):
        return f"{self.user} - {self.message}"
