import logging

from rest_framework import serializers
from django.contrib.auth import authenticate

from .models import User, Organization

logger = logging.getLogger(__file__)


# Serializers define the API representation.
class UserSerializer(serializers.ModelSerializer):
    organization = serializers.CharField(
        max_length=128, allow_blank=False, write_only=True
    )
    is_admin = serializers.BooleanField(write_only=True)

    class Meta:
        model = User
        fields = [
            "name",
            "password",
            "email",
            "organization",
            "is_admin",
            "current_organization_id",
        ]
        extra_kwargs = {
            "password": {"write_only": True},
            "current_organization_id": {"read_only": True},
        }

    def create(self, validated_data):
        name = validated_data["name"]
        password = validated_data["password"]
        email = validated_data["email"]
        is_admin = validated_data["is_admin"]
        organization_name = validated_data["organization"]
        user_obj = User(name=name, email=email)
        user_obj.set_password(password)
        user_obj.save()
        organization_obj = Organization.objects.filter(name=organization_name)
        if organization_obj.exists():
            organization_obj = organization_obj.first()
        else:
            organization_obj = Organization(name=organization_name)
            organization_obj.save()
        organization_obj.user.add(user_obj)
        if is_admin:
            organization_obj.admin.add(user_obj)
        user_obj.current_organization_id = organization_obj.pk
        return user_obj

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.email = validated_data.get("email", instance.email)
        password = validated_data.get("password")
        if password:
            instance.set_password(password)
        return instance


class APITokenUserSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get("email")
        password = attrs.get("password")

        if email and password:
            user = authenticate(
                request=self.context.get("request"), username=email, password=password
            )

            # The authenticate call simply returns None for is_active=False
            # users. (Assuming the default ModelBackend authentication
            # backend.)
            if not user:
                msg = "Unable to log in with provided credentials."
                raise serializers.ValidationError(msg, code="authorization")
        else:
            msg = 'Must include "email" and "password".'
            raise serializers.ValidationError(msg, code="authorization")

        attrs["user"] = user
        return attrs


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ["name", "user"]
