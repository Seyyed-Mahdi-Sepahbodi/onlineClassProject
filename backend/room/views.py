import random
import time

from accounts.models import ContributorUsers
from agora_token_builder import RtcTokenBuilder
from django.http import JsonResponse
from django.shortcuts import render
from panel.models import *
from rest_framework.generics import ListAPIView, UpdateAPIView, RetrieveAPIView, CreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models.query import QuerySet
from room.models import *

from .serializers import *

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
        room = Rooms.objects.get(id=room_id)
        contributor_room = ContributorRoom.objects.filter(room=room)
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
        contributor_user = ContributorUsers.objects.get(id=contributor_user_id)
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
        contributor_user = ContributorUsers.objects.get(id=contributor_user_id)
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
        contributor_user = ContributorUsers.objects.get(id=contributor_user_id)
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


class RoomDetailAPIView(RetrieveAPIView):
    queryset = Rooms.objects.all()
    serializer_class = RoomDetailSerializer


class ChangeRoomMicrophoneStatusAPIView(UpdateAPIView):
    queryset = Rooms.objects.all()
    serializer_class = RoomMicrophoneUpdateSerializer
    lookup_field = "room_id"
    
    def update(self, request, *args, **kwargs):
        room_id = kwargs['room_id']
        room = Rooms.objects.get(id=room_id)
        serializer = self.get_serializer(room, data=request.data, partial=True)     
        if serializer.is_valid():
            if len(request.data) == 0:
                room.microphone = False
                room.save()
                return Response({"message": "room microphone status changed."})
            else:
                serializer.save()
                return Response({"message": "room microphone status changed."})
        else:
            return Response({"message": "failed", "details": serializer.errors})


class ChangeRoomWebCamStatusAPIView(UpdateAPIView):
    queryset = Rooms.objects.all()
    serializer_class = RoomWebCamUpdateSerializer
    lookup_field = "room_id"
    
    def update(self, request, *args, **kwargs):
        room_id = kwargs['room_id']
        room = Rooms.objects.get(id=room_id)
        serializer = self.get_serializer(room, data=request.data, partial=True)     
        if serializer.is_valid():
            if len(request.data) == 0:
                room.webcam = False
                room.save()
                return Response({"message": "room webcam status changed."})
            else:
                serializer.save()
                return Response({"message": "room webcam status changed."})
        else:
            return Response({"message": "failed", "details": serializer.errors})


class ChangeRoomScreenStatusAPIView(UpdateAPIView):
    queryset = Rooms.objects.all()
    serializer_class = RoomScreenUpdateSerializer
    lookup_field = "room_id"
    
    def update(self, request, *args, **kwargs):
        room_id = kwargs['room_id']
        room = Rooms.objects.get(id=room_id)
        serializer = self.get_serializer(room, data=request.data, partial=True)     
        if serializer.is_valid():
            if len(request.data) == 0:
                room.screen = False
                room.save()
                return Response({"message": "room share screen status changed."})
            else:
                serializer.save()
                return Response({"message": "room share screen status changed."})
        else:
            return Response({"message": "failed", "details": serializer.errors})


class RoomMessageListAPIView(ListAPIView):
    serializer_class = RoomMessageListSerializer
    lookup_url_kwarg = "room_id"

    def get_queryset(self):
        room_id = self.kwargs.get(self.lookup_url_kwarg)
        room = Rooms.objects.get(id=room_id)
        messages = Messages.objects.filter(room=room)
        return messages


class AddMessageAPIView(CreateAPIView):
    serializer_class = AddMessageSerializer
    queryset = Messages.objects.all()


class AddPrivateMessageAPIView(CreateAPIView):
    serializer_class = AddPrivateMessageSerializer
    queryset = Messages.objects.all()


class ShowPrivateMessageAPIView(ListAPIView):
    serializer_class = ShowPrivateMessageSerializer
    lookup_url_kwarg = "user_id"
    lookup_url_kwarg_2 = "receiver_id"

    def get_queryset(self, *args, **kwargs):
        user_id = self.kwargs.get(self.lookup_url_kwarg)
        receiver_id = self.kwargs.get(self.lookup_url_kwarg_2)
        messages = Messages.objects.filter(room=user_id, receiver=receiver_id)
        return messages


class ShowPrivateChatsAPIView(ListAPIView):
    serializer_class = ShowPrivateChatsSerializer
    lookup_url_kwarg = "user_id"
    
    def get_queryset(self):
        user_id = self.kwargs.get(self.lookup_url_kwarg)
        # query = models.Messages.objects.filter(user=user_id).query
        # print(query)
        # query.group_by = ['receiver']
        # print(query)
        # results = QuerySet(query=query, model=models.Messages)
        # print(results)
        # results = models.Messages.objects.filter(user=user_id).distinct('receiver')
        results = Messages.objects.filter(user=user_id)
        return results


class DeleteMessagesAPIView(APIView):
    pass


class CreatePollAPIView(CreateAPIView):
    serializer_class = CreatePollSerializer
    queryset = Vote.objects.all()


class CreateChoiceAPIView(CreateAPIView):
    serializer_class = CreateChoiceSerializer
    queryset = Choice.objects.all()


class RoomPollsListAPIView(ListAPIView):
    serializer_class = RoomPollsListSerializer
    lookup_url_kwarg = "room_id"

    def get_queryset(self):
        room_id = self.kwargs.get(self.lookup_url_kwarg)
        polls = Vote.objects.filter(room=room_id)
        return polls
    

class PollChoicesAPIView(ListAPIView):
    serializer_class = PollChoicesSerializer
    lookup_url_kwarg = "poll_id"

    def get_queryset(self):
        poll_id = self.kwargs.get(self.lookup_url_kwarg)
        choices = Choice.objects.filter(vote=poll_id)
        return choices
    

class ClosePollAPIView(UpdateAPIView):
    queryset = Vote.objects.all()
    serializer_class = ClosePollSerializer
    lookup_field = "poll_id"

    def update(self, request, *args, **kwargs):
        poll_id = kwargs['poll_id']
        poll = Vote.objects.get(id=poll_id)
        serializer = self.get_serializer(room, data=request.data, partial=True)     
        if serializer.is_valid():
            if len(request.data) == 0:
                poll.status = False
                poll.save()
                return Response({"message": "poll has been closed."})
            else:
                return Response({"message": "failed", "details": "Invalid input."})
        else:
            return Response({"message": "failed", "details": serializer.errors})


def lobby(request):
    return render(request, 'room/lobby.html')

def room(request):
    return render(request, 'room/room.html')
