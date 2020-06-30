import logging

from rest_framework import serializers
from hl_rest_api import analytics

from .models import User, Organization, Notification


logger = logging.getLogger(__file__)


# Serializers define the API representation.
class UserSerializer(serializers.ModelSerializer):
    organization = serializers.CharField(
        max_length=128, allow_blank=False, write_only=True
    )
    is_admin = serializers.BooleanField(write_only=True)
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = [
            "name",
            "password",
            "email",
            "organization",
            "is_admin",
            "current_organization_id",
            "id",
        ]
        extra_kwargs = {
            "password": {"write_only": True},
            "id": {"read_only": True},
            "current_organization_id": {"read_only": True},
        }

    def create(self, validated_data):
        name = validated_data["name"]
        password = validated_data["password"]
        email = validated_data["email"].lower()
        is_admin = validated_data["is_admin"]
        organization_name = validated_data["organization"]
        notification = Notification()
        notification.save()
        user_obj = User(name=name, email=email, notifications=notification)
        user_obj.set_password(password)
        user_obj.save()
        organization_obj = Organization.objects.filter(name=organization_name)
        existing_org = organization_obj.exists()
        if existing_org:
            organization_obj = organization_obj.first()
        else:
            organization_obj = Organization(name=organization_name)
            organization_obj.save()

        organization_obj.user.add(user_obj)
        if is_admin:
            organization_obj.admin.add(user_obj)
        user_obj.current_organization_id = organization_obj.pk
        user_obj.save()

        analytics.register_events(user_obj, organization_obj, existing_org)

        return user_obj

    def update(self, instance, validated_data):
        instance.name = validated_data.get("name", instance.name)
        instance.email = validated_data.get("email", instance.email)
        instance.current_organization_id = validated_data.get(
            "current_organization_id", instance.current_organization_id
        )
        password = validated_data.get("password")
        if password:
            instance.set_password(password)
        instance.save()
        return instance


class APITokenUserSerializer(serializers.Serializer):
    def validate(self, attrs):
        request = self.context.get("request")
        if not request.user:
            msg = "Unable to log in with user."
            raise serializers.ValidationError(msg, code="authorization")
        attrs["user"] = request.user
        return attrs
