from django.contrib import admin
from .models import *

# Register your models here.

class OrganizerUsersAdmin(admin.ModelAdmin):
    list_display = [
        'user', 
        'number_of_rooms',
        'number_of_contributors',
        'number_of_files',
        'disk_space',
        'remain_disk_space' 
    ]
admin.site.register(OrganizerUsers, OrganizerUsersAdmin)


class ContributorUsersAdmin(admin.ModelAdmin):
    list_display = [
        'user', 
        'status',
    ]
    list_editable = [
        'status'
    ]
    list_filter = [
        'user',
        'status',
    ]
admin.site.register(ContributorUsers, ContributorUsersAdmin)

admin.site.register(CustomUsers)