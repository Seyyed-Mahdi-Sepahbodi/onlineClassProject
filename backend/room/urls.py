from django.urls import path
from . import views

app_name = 'room'
urlpatterns = [

    # api paths
    path('api/<int:room_id>/', views.RoomsUsersListAPIView.as_view(), name='room_users'),
    path('api/microphone/<int:user_id>/', views.ChangeUserMicrophoneStatusAPIView.as_view(), name='user_microphone'),
    
    # paths
    path('', views.lobby, name='room_lobby'),
    path('room/', views.room, name='room_page'),

    path('get_token/', views.getToken, name='get_token'),
]
