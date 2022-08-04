from django.contrib import admin
from .models import *

# Register your models here.

class RoomAdmin(admin.ModelAdmin):
    list_display = [
        'title',
        'organizer',
        'status',
        'allow_guests',
        'operator_first',
        'automatic_ending',
        'duration',
        'created_at'
    ]
    list_editable = [
        'status',
        'allow_guests',
        'operator_first',
        'automatic_ending',
        'duration'
    ]
    list_filter = [
        'allow_guests',
        'operator_first',
        'automatic_ending'
    ]
admin.site.register(Rooms, RoomAdmin)


class FileAdmin(admin.ModelAdmin):
    list_display = [
        'title',
        'user',
        'room',
        'uploaded_at',
        'type_of_file',
        'size_of_file',
    ]
    list_filter = [
        'uploaded_at',
        'user',
        'room'
    ]
admin.site.register(Files, FileAdmin)


class MessageAdmin(admin.ModelAdmin):
    list_display = [
        'user',
        'room',
        'content',
        'created_at',
    ]
    list_filter = [
        'created_at',
        'user',
        'room',
    ]
admin.site.register(Messages, MessageAdmin)


class CotributorRoomAdmin(admin.ModelAdmin):
    list_display = [
        'user',
        'room',
        'contributor_type',
        'contribution_start_date'
    ]
    list_editable = [
        'contributor_type'
    ]
    list_filter = [
        'contribution_start_date',
        'contributor_type',
        'user',
        'room',
    ]
admin.site.register(ContributorRoom, CotributorRoomAdmin)


