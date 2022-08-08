from django.shortcuts import render
from .serializers import UserDetailSerializer
from rest_framework.generics import ListAPIView, UpdateAPIView
from accounts.models import ContributorUsers
from panel import models

# Create your views here.

class RoomsUsersListAPIView(ListAPIView):
    serializer_class = UserDetailSerializer
    lookup_url_kwarg = "room_id"

    def get_queryset(self):
        room_id = self.kwargs.get(self.lookup_url_kwarg)
        room = models.Rooms.objects.get(id=room_id)
        contributor_room = models.ContributorRoom.objects.filter(room=room)
        users = []
        for record in contributor_room:
            users.append(record.user)
        return users


class ChangeUserMicrophoneStatusAPIView(UpdateAPIView):
    pass


def room(request):
    return render(request, 'room/room.html')
    