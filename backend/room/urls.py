from django.urls import path
from . import views

app_name = 'room'
urlpatterns = [
    path('api/<int:room_id>/', views.RoomsUsersListAPIView.as_view(), name='room_users'),
    path('api/microphone/<int:user_id>/', views.ChangeUserMicrophoneStatusAPIView.as_view(), name='user_microphone'),
]
