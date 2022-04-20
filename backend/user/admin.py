from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser

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
