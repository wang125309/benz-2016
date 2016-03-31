from django.db import models


# Create your models here.
class Service(models.Model):
    service_name = models.CharField(max_length=256,null=True)

class User(models.Model):
    name = models.CharField(max_length=127,null=True)
    mobile = models.CharField(max_length=13,null=True)
    email = models.CharField(max_length=64,null=True)
    sex = models.CharField(max_length=4,null=True)
    province = models.CharField(max_length=256,null=True)
    city = models.CharField(max_length=256,null=True)
    service_name = models.CharField(max_length=256,null=True)


