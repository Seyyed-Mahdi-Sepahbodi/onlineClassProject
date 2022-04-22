from django.db import models
from service.models import Service

# Create your models here.

class Room(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    status = models.BooleanField(default=False)
    service = models.ForeignKey(Service, on_delete=models.CASCADE, related_name='roomService')
    users_number_limitation = models.BigIntegerField()
    session_duration = models.BigIntegerField()
    accept_guest = models.BooleanField()
    operator_enter = models.BooleanField()
    used_time = models.TimeField(null=True, blank=True)
    total_used_time = models.TimeField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


# class File(models.Model):
#     VIDEO = 'VID'
#     PICTURE = 'PIC'
#     AUDIO = 'AUD'
#     DOCUMENT = 'DOC'
#     FILE_CATEGORY_CHOICES = [
#         (VIDEO, 'ویدئو'),
#         (PICTURE, 'تصویر'),
#         (AUDIO, 'صوت'),
#         (DOCUMENT, 'سند')
#     ]
#     title = models.CharField(max_length=100)
#     category = models.CharField(choices=FILE_CATEGORY_CHOICES, max_length='3', default=DOCUMENT)
#     uploader = models.ForeignKey(to, on_delete=models.DO_NOTHING)
#     room = models.ForeignKey(Room, on_delete=models.CASCADE)
#     upload_date = models.DateTimeField(auto_now_add=True)
    