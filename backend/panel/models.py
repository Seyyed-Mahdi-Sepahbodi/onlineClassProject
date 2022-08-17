from django.db import models
from django.contrib.auth import get_user_model
from accounts.models import OrganizerUsers, ContributorUsers
import os

# Create your models here.

User = get_user_model()

class Rooms(models.Model):
    HOLDING = 'HLD'
    CLOSED = 'CLS'
    REMOVED = 'RMV'
    ROOM_STATUS_CHOICES = [
        (HOLDING, 'در حال برگزاری'),
        (CLOSED, 'بسته'),
        (REMOVED, 'حذف شده'),
    ]
    organizer = models.ForeignKey(OrganizerUsers, on_delete=models.CASCADE, related_name='room_organizer', verbose_name='برگزار کننده')
    title = models.CharField(max_length=50, verbose_name='عنوان کلاس')
    status = models.CharField(max_length=3, choices=ROOM_STATUS_CHOICES, default=CLOSED, verbose_name='وضعیت')
    allow_guests = models.BooleanField(default=True, verbose_name='امکان ورود مهمان')
    operator_first = models.BooleanField(default=True, verbose_name='بازگشایی با ورود اپراتور')
    automatic_ending = models.BooleanField(default=False, verbose_name='پایان خودکار')
    duration = models.IntegerField(default=0, verbose_name='مدت زمان')
    microphone = models.BooleanField(default=False, verbose_name='میکروفون')
    webcam = models.BooleanField(default=False, verbose_name='دوربین')
    screen = models.BooleanField(default=False, verbose_name='اشتراک گذاری صفحه')
    created_at = models.DateTimeField(auto_now_add=True, null=True)

    class Meta:
        verbose_name = 'اتاق'
        verbose_name_plural = 'اتاق‌ها'

    def get_contributors_list(self):
        contributors = ContributorRoom.objects.filter(room=self.id)
        return contributors

    def users_count(self):
        users_count = ContributorRoom.objects.filter(room=self.id).count()
        return users_count

    def files_count(self):
        return self.file_room.count()

    def __str__(self):
        return f"Room '{self.title}' organized by '{self.organizer.user.full_name()}'"


class Files(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='file_user', verbose_name='بارگذاری کننده')
    room = models.ForeignKey(Rooms, on_delete=models.CASCADE, related_name='file_room', verbose_name='اتاق')
    title = models.CharField(max_length=50, verbose_name='عنوان فایل')
    file_content = models.FileField(upload_to='files/', null=True, blank=True, verbose_name='فایل')
    uploaded_at = models.DateTimeField(auto_now_add=True, null=True)

    class Meta:
        verbose_name = 'فایل'
        verbose_name_plural = 'فایل‌ها'
    
    def type_of_file(self):
        file_name = self.file_content.name
        file_format = file_name.split('.')[-1]
        return file_format

    def size_of_file(self):
        return self.file_content.size

    def __str__(self):
        return f"File '{self.title}' uploaded by '{self.user.full_name()}'"


class Messages(models.Model):
    NORMAL = 'NRM'
    REMOVED = 'RMV'
    MESSAGE_STATUS_CHOICES = [
        (NORMAL, 'عادی'),
        (REMOVED, 'حذف شده'),
    ]
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='message_user', verbose_name='کاربر')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='message_receiver', null=True, blank=True, verbose_name='گیرنده')
    status = models.CharField(max_length=3, choices=MESSAGE_STATUS_CHOICES, default=NORMAL, verbose_name='وضعیت')
    room = models.ForeignKey(Rooms, on_delete=models.CASCADE, related_name='message_room', verbose_name='اتاق')
    content = models.CharField(max_length=1000, verbose_name='محتوا')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')

    class Meta:
        verbose_name = 'پیام'
        verbose_name_plural = 'پیام‌ها'

    def __str__(self):
        return f"Message by '{self.user.full_name()}' in room '{self.room.title}'"

class ContributorRoom(models.Model):
    OPERATOR = 'OPT'
    NORMAL = 'NRM'
    GUEST = 'GST'
    CONTRIBUTOR_TYPE_CHOICES = [
        (OPERATOR, 'اپراتور'),
        (NORMAL, 'عادی'),
        (GUEST, 'مهمان'),
    ]
    user = models.ForeignKey(ContributorUsers, on_delete=models.SET_NULL, related_name='room_contributor_user', null=True, blank=True, verbose_name='کاربر')
    room = models.ForeignKey(Rooms, on_delete=models.SET_NULL, related_name='room_contributor_room', null=True, blank=True, verbose_name='اتاق')
    contributor_type = models.CharField(max_length=3, choices=CONTRIBUTOR_TYPE_CHOICES, default=NORMAL, verbose_name='نوع شرکت کننده')
    contribution_start_date = models.DateTimeField(auto_now_add=True, null=True)

    class Meta:
        verbose_name = 'شرکت کننده اتاق'
        verbose_name_plural = 'شرکت کنندگان اتاق‌ها'

    def __str__(self):
        return f"'{self.user.user.full_name()}' user in room '{self.room.title}'"
