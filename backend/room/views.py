from django.shortcuts import render
from .serializers import UserDetailSerializer, UserMicrophoneUpdateSerializer, UserWebCamUpdateSerializer, UserScreenUpdateSerializer
from rest_framework.generics import ListAPIView, UpdateAPIView
from accounts.models import ContributorUsers
from panel import models
from agora_token_builder import RtcTokenBuilder
from django.http import JsonResponse
from rest_framework.response import Response
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
    queryset = ContributorUsers.objects.all()
    serializer_class = UserMicrophoneUpdateSerializer
    lookup_field = "user_id"
    
    def update(self, request, *args, **kwargs):
        contributor_user_id = kwargs['user_id']
        contributor_user = models.ContributorUsers.objects.get(id=contributor_user_id)
        user = contributor_user.user
        serializer = self.get_serializer(user, data=request.data, partial=True)     
        if serializer.is_valid():
            if len(request.data) == 0:
                user.microphone = False
                user.save()
                return Response({"message": "user microphone status changed."})
            else:
                serializer.save()
                return Response({"message": "user microphone status changed."})
        else:
            return Response({"message": "failed", "details": serializer.errors})


class ChangeUserWebCamStatusAPIView(UpdateAPIView):
    queryset = ContributorUsers.objects.all()
    serializer_class = UserWebCamUpdateSerializer
    lookup_field = "user_id"
    
    def update(self, request, *args, **kwargs):
        contributor_user_id = kwargs['user_id']
        contributor_user = models.ContributorUsers.objects.get(id=contributor_user_id)
        user = contributor_user.user
        serializer = self.get_serializer(user, data=request.data, partial=True)     
        if serializer.is_valid():
            if len(request.data) == 0:
                user.webcam = False
                user.save()
                return Response({"message": "user webcam status changed."})
            else:
                serializer.save()
                return Response({"message": "user webcam status changed."})
        else:
            return Response({"message": "failed", "details": serializer.errors})


class ChangeUserScreenStatusAPIView(UpdateAPIView):
    queryset = ContributorUsers.objects.all()
    serializer_class = UserScreenUpdateSerializer
    lookup_field = "user_id"
    
    def update(self, request, *args, **kwargs):
        contributor_user_id = kwargs['user_id']
        contributor_user = models.ContributorUsers.objects.get(id=contributor_user_id)
        user = contributor_user.user
        serializer = self.get_serializer(user, data=request.data, partial=True)     
        if serializer.is_valid():
            if len(request.data) == 0:
                user.screen = False
                user.save()
                return Response({"message": "user share screen status changed."})
            else:
                serializer.save()
                return Response({"message": "user share screen status changed."})
        else:
            return Response({"message": "failed", "details": serializer.errors})


def lobby(request):
    return render(request, 'room/lobby.html')

def room(request):
    return render(request, 'room/room.html')
    