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
    period = models.CharField(choices=SERVICE_PERIOD_CHOICES, max_length=3, default=ONEMONTH)
    price = models.BigIntegerField()
    discount = models.FloatField()

    def __str__(self):
        for i in Plan.SERVICE_PERIOD_CHOICES:
            if i[0] == self.period:
                return i[1]
    

class Service(models.Model):
    user = models.ForeignKey(organizer_user, on_delete=models.CASCADE, related_name='serviceUser')
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
    start_date = models.DateTimeField(auto_now_add=True, null=True)

    def end_date(self):
        return self.start_date

