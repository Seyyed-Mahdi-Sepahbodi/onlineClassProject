from rest_framework import serializers
from accounts.models import ContributorUsers
from django.contrib.auth import get_user_model
from panel.models import *
from room.models import *

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['avatar', 'username', 'full_name', 'email', 'gender', 'webcam', 'microphone', 'screen']


class ContributorRoomSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ContributorRoom
        fields = ['contributor_type']


class UserDetailSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)
    contributor_room = ContributorRoomSerializer(read_only=True)

    class Meta:
        model = ContributorUsers
        fields = ['id', 'user', 'contributor_room']


class UserMicrophoneUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['microphone']


class UserWebCamUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['webcam']


class UserScreenUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['screen']


class RoomDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = Rooms
        fields = ['organizer', 'title', 'automatic_ending', 'duration', 'webcam', 'microphone', 'screen', 'users_count', 'files_count']


class RoomMicrophoneUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Rooms
        fields = ['microphone']


class RoomWebCamUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Rooms
        fields = ['webcam']


class RoomScreenUpdateSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Rooms
        fields = ['screen']


class RoomMessageListSerializer(serializers.ModelSerializer):

    class Meta:
        model = Messages
        fields = ['user', 'content', 'created_at']


class AddMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Messages
        fields = ['user', 'room', 'content']


class AddPrivateMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Messages
        fields = ['user', 'receiver', 'room', 'content']


class ShowPrivateMessageSerializer(serializers.ModelSerializer):

    class Meta:
        model = Messages
        fields = ['user', 'receiver', 'room', 'content', 'created_at']


class ShowPrivateChatsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Messages
        fields = ['user', 'receiver']


class CreatePollSerializer(serializers.ModelSerializer):

    class Meta:
        model = Vote
        fields = '__all__'