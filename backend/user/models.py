from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils import timezone
# from room.models import Room


# Create your models here.


class CustomUser(AbstractUser):
    email = models.EmailField(max_length=200, unique=True)
    phone_number = models.CharField(max_length=11, unique=True)
    organizer = models.BooleanField(default=False)
    membership_date = models.DateTimeField(auto_now_add=True, null=True)

    def shown_name(self):
        return self.first_name + " " + self.last_name
    shown_name.short_description = 'نام نمایشی کاربر'

    def number_of_services(self):
        return self.serviceUser.all().count()
    number_of_services.short_description = 'تعداد سرویس ها'

    def number_of_rooms(self):
        result = 0
        for i in self.serviceUser.all():
            result += i.roomService.all().count()
        return result
    number_of_services.short_description = 'تعداد اتاق ها'

    def number_of_users(self):
        result = 0
        for i in self.serviceUser.all():
            for j in i.roomService.all():
                result += j.userRoom.all().count()
        return result
    number_of_services.short_description = 'تعداد شرکت کنندگان'

    def files_number(self):
        pass
    number_of_services.short_description = 'تعداد فایل ها'

    def files_volume(self):
        pass
    number_of_services.short_description = 'حجم فایل ها'

from room.models import Room
class CustomUser_Room(models.Model):
    OPERATOR = 'OPT'
    PRESENTER = 'PRS'
    GUEST = 'GUT'
    USER_ROLE_CHOICES = [
        (OPERATOR, 'اپراتور'),
        (PRESENTER, 'ارائه دهنده'),
        (GUEST, 'مهمان')
    ]
    user = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    room = models.ForeignKey(Room, on_delete=models.CASCADE, related_name='userRoom')
    role = models.CharField(choices=USER_ROLE_CHOICES, max_length=3, default=GUEST)
