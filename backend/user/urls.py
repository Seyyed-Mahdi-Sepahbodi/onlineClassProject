from django.urls import path
from .views import OrganizerListView

urlpatterns = [
    path('list/', OrganizerListView.as_view(), name='list_organizer'),
]
