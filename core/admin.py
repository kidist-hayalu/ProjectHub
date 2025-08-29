from django.contrib import admin
from .models import User, Task, Project, Team

admin.site.register(User)
admin.site.register(Task)
admin.site.register(Project)
admin.site.register(Team)

# Register your models here.
