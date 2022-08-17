from django.urls import path
from . import views

app_name = 'room'
urlpatterns = [


    # room APIs
    path('api/room_detail/<int:pk>/', views.RoomDetailAPIView.as_view(), name='room_detail'), 
    path('api/room_users/<int:room_id>/', views.RoomsUsersListAPIView.as_view(), name='room_users'),
    path('api/microphone/<int:room_id>/', views.ChangeRoomMicrophoneStatusAPIView.as_view(), name='room_microphone'),
    path('api/webcam/<int:room_id>/', views.ChangeRoomWebCamStatusAPIView.as_view(), name='room_webcam'),
    path('api/screen/<int:room_id>/', views.ChangeRoomScreenStatusAPIView.as_view(), name='room_screen'),

    # user APIs
    path('api/user/microphone/<int:user_id>/', views.ChangeUserMicrophoneStatusAPIView.as_view(), name='user_microphone'),
    path('api/user/webcam/<int:user_id>/', views.ChangeUserWebCamStatusAPIView.as_view(), name='user_webcam'),
    path('api/user/screen/<int:user_id>/', views.ChangeUserScreenStatusAPIView.as_view(), name='user_screen'),

    # message APIs
    path('api/message_list/<int:room_id>/', views.RoomMessageListAPIView.as_view(), name='messages_list'),
    path('api/show_private_message/<int:user_id>/<int:receiver_id>/', views.ShowPrivateMessageAPIView.as_view(), name='show_private_message'),
    path('api/send_message/', views.AddMessageAPIView.as_view(), name='add_message'),
    path('api/send_private_message/', views.AddPrivateMessageAPIView.as_view(), name='add_private_message'),
    path('api/delete_all_messages/<int:room_id>/', views.DeleteMessagesAPIView.as_view(), name='delete_all_messages'),

    # chat APIs
    path('api/show_private_chats/<int:user_id>/', views.ShowPrivateChatsAPIView.as_view(), name='show_private_chats'),

    # poll APIs
    path('api/polls/<int:room_id>/', views.RoomPollsListAPIView.as_view(), name='room_polls'),
    path('api/choices/<int:poll_id>/', views.PollChoicesAPIView.as_view(), name='poll_choices'),
    # path('api/show_poll/<int:poll_id>/', views.ShowPollAPIView.as_view(), name='show_poll'),
    path('api/create_poll/', views.CreatePollAPIView.as_view(), name='create_poll'),
    path('api/create_choice/', views.CreateChoiceAPIView.as_view(), name='create_choice'),
    path('api/close_poll/', views.ClosePollAPIView.as_view(), name='close_poll'),

    # paths
    path('', views.lobby, name='room_lobby'),
    path('room/', views.room, name='room_page'),

    path('get_token/', views.getToken, name='get_token'),
]
