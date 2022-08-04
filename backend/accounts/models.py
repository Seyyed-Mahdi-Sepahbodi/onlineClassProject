from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.


class CustomUsers(AbstractUser):
    UNDEFINED = 'U'
    MALE = 'M'
    FEMALE = 'F'
    USER_GENDER_CHOICES = [
        (UNDEFINED, 'نامشخص'),
        (MALE, 'آقا'),
        (FEMALE, 'خانم'),
    ]
    mobile_phone_number = models.CharField(
        max_length=13,
        verbose_name='شماره موبایل'
    )
    email = models.CharField(max_length=200, verbose_name='ایمیل')
    gender = models.CharField(
        max_length=1,
        choices=USER_GENDER_CHOICES,
        default=UNDEFINED,
        verbose_name='جنسیت'
    )

    class Meta:
        verbose_name = 'کاربر'
        verbose_name_plural = 'کاربران'

    def full_name(self):
        return self.first_name + " " + self.last_name


class OrganizerUsers(models.Model):
    user = models.OneToOneField(
        CustomUsers,
        on_delete=models.CASCADE,
        related_name='organizer_user',
        verbose_name='کاربر'
    )

    class Meta:
        verbose_name = 'برگزارکننده'
        verbose_name_plural = 'برگزارکنندگان'

    def number_of_rooms(self):
        return self.room_organizer.count()

    def number_of_contributors(self):
        rooms_list = self.room_organizer.all()
        result = 0
        for i in rooms_list:
            result += i.room_contributor_room.count()
        return result

    def number_of_files(self):
        rooms_list = self.room_organizer.all()
        result = 0
        for i in rooms_list:
            result += i.file_room.count()
        return result

    def disk_space(self):
        return self.number_of_rooms() * 500

    def used_space_in_percent(self):
        rooms_list = self.room_organizer.all()
        files_list = []
        total_size = 0
        for i in rooms_list:
            files_list.extend(i.file_room.all())
        for file in files_list:
            total_size += file.size_of_file()
        return total_size / self.disk_space()

    def remain_disk_space(self):
        rooms_list = self.room_organizer.all()
        files_list = []
        total_size = 0
        for i in rooms_list:
            files_list.extend(i.file_room.all())
        for file in files_list:
            total_size += file.size_of_file()
        result = int(((self.disk_space() * 1024 * 1024) - total_size) / 1024 / 1024)
        return result


    def __str__(self):
        return self.user.full_name()


class ContributorUsers(models.Model):
    NORMAL = 'NRM'
    BANNED = 'BND'
    CONTRIBUTOR_STATUS_CHOICES = [
        (NORMAL, 'عادی'),
        (BANNED, 'مسدود شده'),
    ]
    user = models.OneToOneField(
        CustomUsers, 
        on_delete=models.CASCADE,
        related_name='contributor_user', 
        verbose_name='کاربر'
    )
    status = models.CharField(
        max_length=3, 
        choices=CONTRIBUTOR_STATUS_CHOICES, 
        default=NORMAL, 
        verbose_name='وضعیت'
    )

    class Meta:
        verbose_name = 'شرکت کننده'
        verbose_name_plural = 'شرکت کنندگان'

    def __str__(self):
        return f"User '{self.user.full_name()}' by username: '{self.user.username}'"
