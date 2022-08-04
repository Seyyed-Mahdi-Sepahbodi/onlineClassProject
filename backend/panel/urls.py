from django.urls import path
from . import views

app_name = 'panel'
urlpatterns = [
    path('', views.PanelHomeView.as_view(), name='panel_home'),
    path('profile/', views.UserProfileView.as_view(), name='user_profile'),
    path('users_list/', views.UsersListView.as_view(), name='users_list'),
    path('user_info/<int:pk>/', views.UserInfoView.as_view(), name='user_info'),
    path('add_user/', views.AddUserView.as_view(), name='new_user'),
    path('edit_user/<int:pk>/', views.EditUserView.as_view(), name='edit_user'),
    path('delete_user/<int:pk>/', views.DeleteUserView.as_view(), name='delete_user'),
    path('rooms_list/', views.RoomsListView.as_view(), name='rooms_list'),
    path(
        'room_details/<int:pk>/',
        views.RoomDetailsView.as_view(),
        name='room_details'
    ),
    path('new_room/', views.AddRoomView.as_view(), name='new_room'),
    path('edit_room/<int:pk>/', views.EditRoomView.as_view(), name='edit_room'),
    path('delete_room/<int:pk>/', views.DeleteRoomView.as_view(), name='delete_room'),
    path('files_list/', views.FilesListView.as_view(), name='files_list'),
    # path(
    #     'file_details/<int:pk>/',
    #     views.FileDetailsView.as_view(),
    #     name='file_details'
    # ),
    # path('new_file/', views.AddFileView.as_view(), name='new_file'),
    # path('edit_file/<int:pk>/', views.EditFileView.as_view(), name='edit_file'),
    # path('delete_file/<int:pk>/', views.DeleteFileView.as_view(), name='delete_file'),
]
