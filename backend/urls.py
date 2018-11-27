from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.views.generic import TemplateView
from .api import views
from django.conf.urls import url
import djoser.urls.authtoken

# ViewSet router
router = routers.DefaultRouter()
router.register('users', views.UserViewSet)

urlpatterns = [
    url(r'^api/auth/login/', views.login),
    url(r'^api/auth/', include('djoser.urls')),
    url(r'^api/auth/', include('djoser.urls.authtoken')),
    url(r'^api/', include(router.urls)),
]
