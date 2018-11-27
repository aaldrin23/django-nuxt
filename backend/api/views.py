from rest_framework import viewsets, generics, permissions, status
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.models import User
from django.contrib.auth import login as loginUser, logout as logoutUser
from rest_framework.response import Response
from .serializers import UserSerializer
from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def login(request):
    res = Response()

    if not User.objects.filter(username=request.POST.get('username')).exists():
        res.status_code = status.HTTP_200_OK
        res.data = {
            "status": 1,
            "message": "User not exist!"
        }
        return res

    user = authenticate(username=request.POST.get('username'),
                        password=request.POST.get('password'))

    if user is None:
        res.status_code = status.HTTP_200_OK
        res.data = {
            "status": 1,
            "message": "Password Incorrect!"
        }
        return res

    res.data = {
        "status": 0,
        "data": UserSerializer(user).data
    }
    return res


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
