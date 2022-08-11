from django.shortcuts import render
from .serializers import UserDetailSerializer
from rest_framework.generics import ListAPIView, UpdateAPIView
from accounts.models import ContributorUsers
from panel import models
from agora_token_builder import RtcTokenBuilder
from django.http import JsonResponse
import random
import time

# Create your views here.

def getToken(request):
    appId = 'a5037e50b65946fb9a1e60ea134901be'
    appCertificate = 'e75f08b946bd47f1a199d9665068bfcd'
    channelName = request.GET.get('channel')
    uid = random.randint(1, 230)
    expirationTimeInSeconds = 3600 * 24
    currentTimeStamp = time.time()
    privilegeExpiredTs = currentTimeStamp + expirationTimeInSeconds
    role = 1 # host = 1 and guest = 0

    token = RtcTokenBuilder.buildTokenWithUid(appId, appCertificate, channelName, uid, role, privilegeExpiredTs)
    return JsonResponse({'token':token, 'uid':uid}, safe=False)

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

def lobby(request):
    return render(request, 'room/lobby.html')

def room(request):
    return render(request, 'room/room.html')
    