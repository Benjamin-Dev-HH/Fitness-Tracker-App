from django.db import models
from django.conf import settings

# Create your models here.

class Workout(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    activity_type = models.CharField(max_length=100)
    duration = models.DurationField()
    calories_burned = models.PositiveIntegerField()
    date = models.DateField()