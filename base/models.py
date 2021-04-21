from django.db import models

# Create your models here.


class UserInfo(models.Model):
    firstname = models.CharField(max_length=200, null=True, blank=True)
    lastname = models.CharField(max_length=200, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    state = models.CharField(max_length=200, null=True, blank=True)
    zip = models.CharField(max_length=200, null=True, blank=True)
    illness = models.CharField(max_length=200, null=True, blank=True)
    hospital = models.CharField(max_length=200, null=True, blank=True)
    severity = models.IntegerField(null=True, blank=True, default=0)

    def __str__(self):
        return str(self.firstname)
