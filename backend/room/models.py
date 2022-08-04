from django.db import models


class Vote(models.Model):
    title = models.CharField(max_length=2048, verbose_name='صورت نظرسنجی')
    status = models.BooleanField(default=False, verbose_name='وضعیت')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    finished_at = models.DateTimeField(auto_now=True, verbose_name='تاریخ اتمام')

    class Meta:
        verbose_name = 'نظرسنجی'
        verbose_name_plural = 'نظرسنجی‌ها'


class Choice(models.Model):
    vote = models.ForeignKey(Vote, on_delete=models.CASCADE, verbose_name='نظرسنجی')
    content = models.CharField(max_length=255, verbose_name='متن پیام')
    status = models.BooleanField(default=False, verbose_name='وضعیت')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='تاریخ ایجاد')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='تاریخ ویرایش')

    class Meta:
        verbose_name = 'گزینه'
        verbose_name_plural = 'گزینه‌ها'

