from django.urls import path
from .views import UserDetailAPIView

app_name = 'room'
urlpatterns = [
    path('users/', UserDetailAPIView.as_view(), name='user_detail'),
]
