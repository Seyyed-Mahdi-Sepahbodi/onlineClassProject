from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.


class CustomUser(AbstractUser):
    OPERATOR = 'OPT'
    PRESENTER = 'PRS'
    GUEST = 'GUT'
    USER_ROLE_CHOICES = [
        (OPERATOR, 'اپراتور'),
        (PRESENTER, 'ارائه دهنده'),
        (GUEST, 'مهمان')
    ]

    email = models.EmailField(max_length=200, unique=True)
    phone_number = models.CharField(max_length=11, unique=True)
    role = models.CharField(choices=USER_ROLE_CHOICES, max_length=3, default=GUEST)
    organizer = models.BooleanField(default=False)
    membership_date = models.DateTimeField(auto_now_add=True)

    def shown_name(self):
        return self.first_name + " " + self.last_name

    def services_number(self):
        pass

    def rooms_number(self):
        pass

    def users_number(self):
        pass

    def files_number(self):
        pass

    def files_volume(self):
        pass
