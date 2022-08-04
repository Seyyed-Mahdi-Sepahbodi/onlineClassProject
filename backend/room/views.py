from django.shortcuts import render
from .serializers import UserDetailSerializer
from rest_framework.generics import ListAPIView
from accounts.models import ContributorUsers

# Create your views here.

class UserDetailAPIView(ListAPIView):
    queryset = ContributorUsers.objects.all()
    serializer_class = UserDetailSerializer
