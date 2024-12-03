from django.db import models
from django.urls import path, include
from django.conf import settings
from rest_framework import serializers, viewsets, routers

class Order(models.Model):
    symbol = models.CharField(max_length=10)
    date = models.DateField()
    quantity = models.PositiveIntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)