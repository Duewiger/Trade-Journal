import uuid
import json

from django.contrib.auth import get_user_model
from django.contrib.auth.models import AbstractUser
from django.dispatch import receiver
from django.db.models.signals import post_save
from django.db import models
from django.urls import reverse
from django.utils import timezone


class CustomUser(AbstractUser):
    # Personal Data
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    salutation = models.CharField(max_length=50, null=True, blank=True)
    first_name = models.CharField(max_length=100, null=True, blank=True)
    last_name = models.CharField(max_length=100, null=True, blank=True)
    birth_date = models.DateField(null=True, blank=True)
    place_of_birth = models.CharField(max_length=100, null=True, blank=True)
    marital_status = models.CharField(max_length=50, null=True, blank=True)
    nationality = models.CharField(max_length=100, null=True, blank=True)
    # Location Data
    street = models.CharField(max_length=100, null=True, blank=True)
    house_number = models.CharField(max_length=20, null=True, blank=True)
    city = models.CharField(max_length=100, null=True, blank=True)
    postal_code = models.CharField(max_length=20, null=True, blank=True)
    # Contact Data
    phone_number = models.CharField(max_length=20, null=True, blank=True)
    # Finance Data
    iban = models.CharField(max_length=50, null=True, blank=True)
    bic = models.CharField(max_length=50, null=True, blank=True)
    financial_institution = models.CharField(max_length=100, null=True, blank=True)
    
    def __str__(self):
        return f"{self.first_name, self.last_name}"
    
    def get_absolute_url(self):
        return reverse("account_data_edit", kwargs={'id': self.id})
    
    
class Document(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(get_user_model(), on_delete=models.PROTECT)
    file = models.FileField(upload_to="user_documents")
    
    
class Registration(models.Model):
    customer_registration = models.TextField(default='{}')
    registration_date = models.DateTimeField(default=timezone.now)


@receiver(post_save, sender=CustomUser)
def user_created(sender, instance, created, **kwargs):
    if created:
        data = {
            'id': str(instance.id),
            'first_name': instance.first_name,
            'last_name': instance.last_name
        }
        Registration.objects.create(
            user=instance,
            customer_registration=json.dumps(data)
        )