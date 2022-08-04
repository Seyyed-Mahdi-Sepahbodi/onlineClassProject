from django import forms
from django.contrib.auth import get_user_model
from django.contrib.auth.forms import UserChangeForm, UserCreationForm

from .models import *

User = get_user_model()


class OrganizerRegistrationForm(UserCreationForm):

    class Meta:
        model = User
        fields = [
            'username', 'email', 'first_name', 'last_name', 'password1', 'password2']

    def save(self, commit=True):
        user = super(OrganizerRegistrationForm, self).save(commit=True)
        print(user)
        orgaizer_user = OrganizerUsers.objects.create(user=user)
        orgaizer_user.save()
        return user


class CustomUserChangeForm(UserChangeForm):

    class Meta:
        model = User
        fields = ('email',)
