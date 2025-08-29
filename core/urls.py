from django.urls import path
from .views import DashboardView, signup_view, logout_view, homepage_view
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', homepage_view, name='homepage'),
    path('dashboard', DashboardView.as_view(), name='dashboard'),
    path('accounts/login/', auth_views.LoginView.as_view(template_name='core/login.html'), name='login'),
    path('accounts/signup/', signup_view, name='signup'),
    path('accounts/logout/', logout_view , name='logout'),
]