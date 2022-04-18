from django.db import models

# Create your models here.

class Room(models.Model):
    ACTIVE = 'ACT'
    DEACTIVE = 'DCT'
    ROOM_STATUS_CHOICES = [
        (ACTIVE, 'فعال'),
        (DEACTIVE, 'غیرفعال')
    ]
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    status = models.CharField(choices=ROOM_STATUS_CHOICES, max_length=3, default=ACTIVE)
    service = models.ForeignKey('', on_delete=models.CASCADE)
    session_duration = models.BigIntegerField()
    accept_guest = models.BooleanField()
    operator_enter = models.BooleanField()


class File(models.Model):
    VIDEO = 'VID'
    PICTURE = 'PIC'
    AUDIO = 'AUD'
    DOCUMENT = 'DOC'
    FILE_CATEGORY_CHOICES = [
        (VIDEO, 'ویدئو'),
        (PICTURE, 'تصویر'),
        (AUDIO, 'صوت'),
        (DOCUMENT, 'سند')
    ]
    title = models.CharField(max_length=100)
    category = models.CharField(choices=FILE_CATEGORY_CHOICES, max_length='3', default=DOCUMENT)
    uploader = models.ForeignKey(to, on_delete=models.DO_NOTHING)
    room = models.ForeignKey(Room, on_delete=models.CASCADE)
    upload_date = models.DateTimeField(auto_now_add=True)
    