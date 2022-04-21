from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.

organizer_user = get_user_model()

class Plan(models.Model):
    ONEMONTH = 'OMO'
    THREEMONTH = 'TMO'
    SIXMONTH = 'SMO'
    ONEYEAR = 'OYR'
    SERVICE_PERIOD_CHOICES = [
        (ONEMONTH, 'یک ماهه'),
        (THREEMONTH, 'سه ماهه'),
        (SIXMONTH, 'شش ماهه'),
        (ONEYEAR, 'یک ساله')
    ]
    users_number_limit = models.BigIntegerField()
    organizing_time_limit = models.BigIntegerField()
    period = models.CharField(choices=SERVICE_PERIOD_CHOICES, max_length=3)
    price = models.BigIntegerField()
    discount = models.FloatField()
    

class Service(models.Model):
    user = models.ForeignKey(organizer_user, on_delete=models.CASCADE)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
