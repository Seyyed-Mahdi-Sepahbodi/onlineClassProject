from django.urls import path
from .views import OrganizerListView, UserDetailView

urlpatterns = [
    path('list/', OrganizerListView.as_view(), name='list_organizer'),
    path('info/<int:pk>/', UserDetailView.as_view(), name='detail_user'),
]
