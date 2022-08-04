from django.contrib import admin
<<<<<<< HEAD
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser, CustomUser_Room

# Register your models here.

UserAdmin.add_fieldsets[0][1]['fields'] = (
    "first_name",
    "last_name",
    "username",
    'phone_number',
    "password1",
    "password2" ,
    "organizer"   
)
UserAdmin.fieldsets[1][1]['fields'] = (
    "first_name",
    "last_name",
    "email",
    "phone_number",
)
UserAdmin.fieldsets[2][1]['fields'] = (
    "is_active",
    "is_staff",
    "is_superuser",
    "organizer",
    "groups",
    "user_permissions",
)
UserAdmin.list_display = ('username', 'get_full_name', 'email', 'is_superuser', 'is_staff', 'is_active')
UserAdmin.list_filter += ("organizer",)
admin.site.register(CustomUser, UserAdmin)


class CustomUser_RoomAdmin(admin.ModelAdmin):
    pass
admin.site.register(CustomUser_Room, CustomUser_RoomAdmin)
=======
from .models import Room, File

# Register your models here.

class RoomAdmin(admin.ModelAdmin):
    pass
admin.site.register(Room, RoomAdmin)


class FileAdmin(admin.ModelAdmin):
    pass
admin.site.register(File, FileAdmin)
>>>>>>> 00f6527b0710117c960aa017c7db693917946a64
