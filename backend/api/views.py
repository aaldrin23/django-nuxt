from rest_framework import viewsets, generics, permissions
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from django.contrib.auth import login as loginUser, logout as logoutUser
from rest_framework.response import Response
from .serializers import UserSerializer
from django.http import HttpResponse


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def login(request):
    user = User.objects.get(pk=1)
    loginUser(request, user)
    return HttpResponse(UserSerializer(user).data)


@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def logout(request):
    logoutUser(request)
    return Response(0)


@api_view(['GET'])
def current_user(request):
    serializer = UserSerializer(request.user)
    return Response(serializer.data)


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
