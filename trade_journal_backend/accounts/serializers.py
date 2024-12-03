from rest_framework import serializers
from django.contrib.auth.hashers import make_password

from .models import CustomUser, Document, Registration

class CustomUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = [
            'id', 'email', 'password', 'salutation', 'first_name', 'last_name', 
            'birth_date', 'street', 'house_number', 'city', 'postal_code', 
            'phone_number'
        ]
        extra_kwargs = {
            'password': {'write_only': True},
            'first_name': {'required': True},
            'last_name': {'required': True},
            'email': {'required': True},
        }

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data.pop('password'))
        return CustomUser.objects.create(**validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        if password:
            instance.password = make_password(password)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()
        return instance
    
    
class DocumentSerializer(serializers.ModelSerializer):
    file_url = serializers.SerializerMethodField()

    class Meta:
        model = Document
        fields = ['id', 'user', 'file', 'file_url']
        read_only_fields = ['user']

    def get_file_url(self, obj):
        request = self.context.get('request')
        if obj.file and request:
            return request.build_absolute_uri(obj.file.url)
        return None
    

class RegistrationSerializer(serializers.ModelSerializer):
    customer_registration = serializers.JSONField()

    class Meta:
        model = Registration
        fields = ['user', 'customer_registration', 'registration_date']
        read_only_fields = ['user', 'registration_date']