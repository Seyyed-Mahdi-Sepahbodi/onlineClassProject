from django.contrib import admin
from .models import *

# Register your models here.

class VoteAdmin(admin.ModelAdmin):
    list_display = [
        'title',
        'status'
    ]
    list_editable = [
        'status',
    ]
admin.site.register(Vote, VoteAdmin)


class ChoiceAdmin(admin.ModelAdmin):
    list_display = [
        'vote',
        'content',
        'status'
    ]
    list_editable = [
        'status',
    ]
admin.site.register(Choice, ChoiceAdmin)