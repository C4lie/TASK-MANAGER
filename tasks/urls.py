# tasks/urls.py
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet
from .views import RegisterView
from django.shortcuts import render
from . import views

# def home(request):
#     return render(request, 'tasks/templates/tasks/home.html')
app_name = 'tasks'

router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='task')

urlpatterns = [
    path('', include(router.urls)),
    path('', views.home, name='home'),
    path('add/', views.add_task, name='add_task'),
    path('detail/<int:pk>/', views.task_detail, name='task_detail'),
]
urlpatterns += [
    path('register/', RegisterView.as_view(), name='register'),
]