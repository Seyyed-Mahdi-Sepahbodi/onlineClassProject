from django import forms
from .models import *
from django.contrib.auth import get_user_model
import random
from accounts.models import *
from django.contrib.auth.forms import UserCreationForm


User = get_user_model()

class RoomForm(forms.ModelForm):
    
    class Meta:
        model = Rooms
        fields = ['title', 'status', 'allow_guests', 'operator_first', 'automatic_ending', 'duration']


OPERATOR = 'OPT'
NORMAL = 'NRM'
GUEST = 'GST'
CONTRIBUTOR_TYPE_CHOICES = [
    (OPERATOR, 'اپراتور'),
    (NORMAL, 'عادی'),
    (GUEST, 'مهمان'),
]
class UserAddForm(UserCreationForm):
    
    contributor_type = forms.ChoiceField(choices=CONTRIBUTOR_TYPE_CHOICES, widget=forms.Select)

    class Meta:
        model = User
        fields = ['email', 'first_name', 'last_name', 'mobile_phone_number', 'gender', 'password1', 'password2', 'contributor_type']

    def __init__(self, request, *args, **kwargs):
        super(UserAddForm, self).__init__(*args, **kwargs)
        self.user = OrganizerUsers.objects.get(user=request.user.id)
        self.fields['room']=forms.ModelChoiceField(queryset=Rooms.objects.filter(organizer=self.user))

    def save(self, commit=True):
        user = super(UserAddForm, self).save(commit=False)
        user.username = str(self.user) + "_" + self.cleaned_data['last_name'] + "_" + str(random.randint(1000, 9999))
        user.save()
        contributor_user = ContributorUsers.objects.create(user=user, status='NRM')
        contributor_user.save()
        contributor_room = ContributorRoom(user=contributor_user, room=self.cleaned_data['room'], contributor_type=self.cleaned_data['contributor_type'])
        contributor_room.save()
        return user


class UserEditForm(forms.ModelForm):
    contributor_type = forms.ChoiceField(choices=CONTRIBUTOR_TYPE_CHOICES, widget=forms.Select)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'mobile_phone_number', 'gender', 'password', 'contributor_type']

    # def __init__(self, request, *args, **kwargs):
    #     super(UserEditForm, self).__init__(*args, **kwargs)
    #     self.user = OrganizerUsers.objects.get(user=request.user.id)
    #     # print(type(self.instance))
    #     # print(self.room)
    #     self.fields['room']=forms.ModelChoiceField(queryset=Rooms.objects.filter(organizer=self.user), initial={'name': ''})
