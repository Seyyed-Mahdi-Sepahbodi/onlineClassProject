from django.contrib import admin
from .models import Service, Plan

# Register your models here.

class ServiceAdmin(admin.ModelAdmin):
    list_display = ('user', 'plan', 'end_date')
admin.site.register(Service, ServiceAdmin)


class PlanAdmin(admin.ModelAdmin):
    pass
admin.site.register(Plan, PlanAdmin)