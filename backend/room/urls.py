from django.urls import path
from . import views

app_name = 'room'
urlpatterns = [

    # api paths
    path('api/room_detail/<int:pk>/', views.RoomDetailAPIView.as_view(), name='room_detail'), 
    path('api/room_users/<int:room_id>/', views.RoomsUsersListAPIView.as_view(), name='room_users'),
    path('api/microphone/<int:room_id>/', views.ChangeRoomMicrophoneStatusAPIView.as_view(), name='room_microphone'),
    path('api/webcam/<int:room_id>/', views.ChangeRoomWebCamStatusAPIView.as_view(), name='room_webcam'),
    path('api/screen/<int:room_id>/', views.ChangeRoomScreenStatusAPIView.as_view(), name='room_screen'),
    path('api/user/microphone/<int:user_id>/', views.ChangeUserMicrophoneStatusAPIView.as_view(), name='user_microphone'),
    path('api/user/webcam/<int:user_id>/', views.ChangeUserWebCamStatusAPIView.as_view(), name='user_webcam'),
    path('api/user/screen/<int:user_id>/', views.ChangeUserScreenStatusAPIView.as_view(), name='user_screen'),
    path('api/message_list/<int:room_id>/', views.RoomMessageListAPIView.as_view(), name='messages_list'),
    path('api/send_message/', views.AddMessageAPIView.as_view(), name='add_message'),

    # paths
    path('', views.lobby, name='room_lobby'),
    path('room/', views.room, name='room_page'),

    path('get_token/', views.getToken, name='get_token'),
]
