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
        (ONEMONTH, 1),
        (THREEMONTH, 3),
        (SIXMONTH, 6),
        (ONEYEAR, 12)
    ]
    users_number_limit = models.BigIntegerField()
    organizing_time_limit = models.BigIntegerField()
    period = models.CharField(choices=SERVICE_PERIOD_CHOICES, max_length=3, default=ONEMONTH)
    price = models.BigIntegerField()
    discount = models.FloatField()

    def __str__(self):
        for i in Plan.SERVICE_PERIOD_CHOICES:
            if i[0] == self.period:
                return f"{i[1]} ماهه"
    

class Service(models.Model):
    user = models.ForeignKey(organizer_user, on_delete=models.CASCADE, related_name='serviceUser')
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
    start_date = models.DateTimeField(auto_now_add=True, null=True)

    def end_date(self):
        self.start_date.mot
        return self.start_date.month

