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
    path('api/send_private_message/', views.AddPrivateMessageAPIView.as_view(), name='add_private_message'),
    path('api/show_private_message/<int:user_id>/<int:receiver_id>/', views.ShowPrivateMessageAPIView.as_view(), name='show_private_message'),
    path('api/show_private_chats/<int:user_id>/', views.ShowPrivateChatsAPIView.as_view(), name='show_private_chats'),
    path('api/delete_all_messages/<int:room_id>/', views.DeleteMessagesAPIView.as_view(), name='delete_all_messages'),
    path('api/create_poll/', views.CreatePollAPIView.as_view(), name='create_poll'),

    # paths
    path('', views.lobby, name='room_lobby'),
    path('room/', views.room, name='room_page'),

    path('get_token/', views.getToken, name='get_token'),
]
