from django.contrib import admin
from .models import Room, File

# Register your models here.

class RoomAdmin(admin.ModelAdmin):
    pass
admin.site.register(Room, RoomAdmin)


class FileAdmin(admin.ModelAdmin):
    pass
admin.site.register(File, FileAdmin)