from django.urls import path
from django.contrib.auth.views import LogoutView
from . import views

urlpatterns = [
    path('logout/', views.user_logout, name='user-logout'),
    # Task URLs
    path('', views.TaskListView.as_view(), name='task-list'),
    path('task/<int:pk>/', views.TaskDetailView.as_view(), name='task-detail'),
    path('task/new/', views.TaskCreateView.as_view(), name='task-create'),
    path('task/<int:pk>/edit/', views.TaskUpdateView.as_view(), name='task-update'),
    path('task/<int:pk>/delete/', views.TaskDeleteView.as_view(), name='task-delete'),
    path('task/<int:pk>/complete/', views.toggle_task_completion, name='task-complete'),

    # Authentication URLs
    path('login/', views.LoginAPIView.as_view(), name='login'),
    path('register/', views.RegisterView.as_view(), name='register'),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
    
    # API URLs
    path('api/tasks/', views.TaskAPIList.as_view(), name='task-api-list'),
    path('api/tasks/<int:pk>/', views.TaskAPIDetail.as_view(), name='task-api-detail'),
    path('profile/', views.personalization_view, name='personalization'),
    path('profile/change-password/', views.change_password, name='change-password'),
]