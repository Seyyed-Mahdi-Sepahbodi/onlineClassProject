from accounts.models import *
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import render, reverse
from django.views import View
from django.views.generic import (CreateView, DeleteView, DetailView, ListView,
                                  TemplateView, UpdateView)

from .forms import *
from .models import Rooms, ContributorRoom

# Create your views here.

class PanelHomeView(LoginRequiredMixin, TemplateView):
    template_name = 'panel/index.html'

class RoomsListView(LoginRequiredMixin, ListView):
    template_name = 'panel/rooms-list.html'

    def get_queryset(self):
        user = OrganizerUsers.objects.get(user=self.request.user)
        queryset = Rooms.objects.filter(organizer=user)
        return queryset


class RoomDetailsView(LoginRequiredMixin, DetailView):
    model = Rooms
    template_name = 'panel/room-details.html'


class AddRoomView(LoginRequiredMixin, CreateView):
    template_name = 'panel/add-room.html'
    form_class = RoomForm
    
    def get_success_url(self):
        return reverse('panel:rooms_list')

    def form_valid(self, form):
        user = OrganizerUsers.objects.get(user=self.request.user)
        form.instance.organizer = user
        return super().form_valid(form)


class EditRoomView(LoginRequiredMixin, UpdateView):
    model = Rooms
    template_name = 'panel/edit-room.html'
    form_class = RoomForm

    def get_success_url(self, **kwargs):
        return reverse('panel:room_details', kwargs={'pk': self.object.id})


class DeleteRoomView(LoginRequiredMixin, DeleteView):
    model = Rooms
    template_name = 'panel/delete-room.html'

    def get_success_url(self, **kwargs):
        return reverse('panel:rooms_list')


class UsersListView(LoginRequiredMixin, ListView):
    template_name = 'panel/users-list.html'

    def get_queryset(self):
        records = []
        users_list = []
        user = OrganizerUsers.objects.get(user=self.request.user)
        rooms = Rooms.objects.filter(organizer=user)
        rooms = list(rooms)
        for room in rooms:
            room_users = ContributorRoom.objects.filter(room=room)
            records.extend(room_users)
        for record in records:
            users_list.append(record.user)
        users_set = set(users_list)
        return users_set


class UserInfoView(LoginRequiredMixin, DetailView):
    model = ContributorUsers
    template_name = 'panel/contributor-info.html'


class AddUserView(LoginRequiredMixin, CreateView):
    template_name = 'panel/add-user.html'
    form_class = UserAddForm

    def get_success_url(self, **kwargs):
        return reverse('panel:users_list')

    def get_form_kwargs(self):
        kwargs = super(AddUserView, self).get_form_kwargs()
        kwargs['request'] = self.request
        return kwargs


class EditUserView(LoginRequiredMixin, UpdateView):
    model = User
    template_name = 'panel/edit-user.html'
    form_class = UserEditForm

    def get_success_url(self, **kwargs):
        return reverse('panel:user_info', kwargs={'pk': self.object.contributor_user.id})


class DeleteUserView(LoginRequiredMixin, View):

    def get(self, request, *args, **kwargs):
        user = CustomUsers.objects.get(id=kwargs['id'])
        return render(request, 'panel/delete-user.html', {'user': user})

    def post(self, request, *args, **kwargs):
        user = User.objects.get(id=kwargs['id'])
        contributor_user = user.contributor_user
        contributor_room_relation = ContributorRoom.objects.filter(user=contributor_user)
        for record in contributor_room_relation:
            record.delete()
        contributor_user.delete()
        user.delete()
        records = []
        users_list = []
        user = OrganizerUsers.objects.get(user=self.request.user)
        rooms = Rooms.objects.filter(organizer=user)
        rooms = list(rooms)
        for room in rooms:
            records.extend(ContributorRoom.objects.filter(room=room))
        for record in records:
            users_list.append(record.user)
        users_set = set(users_list)
        return render(request, 'panel/users-list.html', {'object_list': users_set})


class FilesListView(ListView):
    template_name = 'panel/files-list.html'

    def get_queryset(self):
        user = OrganizerUsers.objects.get(id=self.request.user.id)
        rooms = user.room_organizer.all()
        file_list = []
        for room in rooms:
            file_list.extend(room.file_room.all())
        return file_list
### ----------------------------------------------------------------------------------------------------------


# class FileDetailsView(DetailView):
#     model = Rooms
#     template_name = 'panel/room-details.html'


# class AddFileView(CreateView):
#     template_name = 'panel/add-room.html'
#     form_class = RoomForm
    
#     def get_success_url(self):
#         return reverse('panel:rooms_list')

#     def form_valid(self, form):
#         user = OrganizerUsers.objects.get(user=self.request.user)
#         form.instance.organizer = user
#         return super().form_valid(form)


# class EditFileView(UpdateView):
#     model = Rooms
#     template_name = 'panel/edit-room.html'
#     form_class = RoomForm

#     def get_success_url(self, **kwargs):
#         return reverse('panel:room_details', kwargs={'pk': self.object.id})


# class DeleteFileView(DeleteView):
#     model = Rooms
#     template_name = 'panel/delete-room.html'

#     def get_success_url(self, **kwargs):
#         return reverse('panel:rooms_list')

class PanelHomeView(LoginRequiredMixin, View):
    def get(self, request):
        return render(request, 'panel/index.html', {'user': request.user})


class UserProfileView(TemplateView):
    template_name = 'panel/user-info.html'
