from django.contrib import admin
from django.contrib.auth import get_user_model

from .models import Document, Registration

# Add extended UserAdmin later for administration
CustomUser = get_user_model()

admin.site.register(CustomUser)
admin.site.register(Document)
admin.site.register(Registration)