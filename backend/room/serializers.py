from rest_framework import serializers
from accounts.models import ContributorUsers
from django.contrib.auth import get_user_model
from panel.models import *


User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = ['username', 'full_name', 'email', 'gender']


class ContributorRoomSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ContributorRoom
        fields = ['contributor_type']


class UserDetailSerializer(serializers.ModelSerializer):

    user = UserSerializer(read_only=True)
    contributor_room = ContributorRoomSerializer(read_only=True)

    class Meta:
        model = ContributorUsers
        fields = ['user', 'contributor_room']

    # def get_user(self, obj):
    #     selected_obj = User.objects.get()
