from rest_framework import serializers
from .models import CustomUser

class OrganizersListSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = CustomUser
        fields = '__all__'


class OrganizerDetailSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        # fields = ('id', 'username', 'first_name', 'last_name', 'number_of_services', 'number_of_users', 'number_of_files', 'volume_of_files', 'disk_space', 'remain_disk_space')
        fields = ('id', 'username', 'first_name', 'last_name')