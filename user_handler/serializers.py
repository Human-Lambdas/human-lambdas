import logging

from rest_framework import serializers

from .models import User, Organization

logger = logging.getLogger(__file__)


# Serializers define the API representation.
class UserCreateSerializer(serializers.ModelSerializer):
    organization = serializers.CharField(max_length=128, allow_blank=False)

    class Meta:
        model = User
        fields = ["name", "password", "email", "organization", "is_admin"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        name = validated_data["name"]
        password = validated_data["password"]
        email = validated_data["email"]
        is_admin = validated_data["is_admin"]
        organization_name = validated_data["organization"]
        organization_obj = Organization(name=organization_name)
        organization_obj.save()
        user_obj = User(name=name, email=email, is_admin=is_admin)
        user_obj.set_password(password)
        user_obj.save()
        organization_obj.user.add(user_obj)
        return validated_data
