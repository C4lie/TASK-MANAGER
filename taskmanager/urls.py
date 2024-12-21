from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponseRedirect
from tasks.views import home

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('tasks.urls')),  # API routes
    
    path('', home),  # Home page route
]
