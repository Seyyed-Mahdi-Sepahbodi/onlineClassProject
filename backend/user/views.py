from django.shortcuts import render
from rest_framework.generics import ListAPIView
from .models import CustomUser
from .serializers import OrganizersListSerializer

# Create your views here.

class OrganizerListView(ListAPIView):
    queryset = CustomUser.objects.all()
    serializer_class = OrganizersListSerializer
