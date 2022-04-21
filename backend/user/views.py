from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import CustomUser
from .serializers import OrganizersListSerializer, OrganizerDetailSerializer

# Create your views here.

class OrganizerListView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = OrganizersListSerializer


class UserDetailView(RetrieveAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = OrganizerDetailSerializer