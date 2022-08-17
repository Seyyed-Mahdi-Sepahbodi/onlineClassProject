from rest_framework import serializers
from accounts.models import ContributorUsers
from django.contrib.auth import get_user_model
from panel.models import *


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

    


class ContributorUserMicrophonUpdateSerializer(serializers.ModelSerializer):

    user = UserMicrophoneUpdateSerializer(read_only=True)

    class Meta:
        model = ContributorUsers
        field = ['user']