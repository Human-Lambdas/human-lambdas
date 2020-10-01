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
    password = serializers.CharField(min_length=8, write_only=True)

    class Meta:
        model = User
        fields = [
            "name",
            "password",
            "email",
            "organization",
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
        notification = Notification()
        notification.save()
        user_obj = User(name=name, email=email, notifications=notification)
        user_obj.set_password(password)
        user_obj.save()
        organization_name = validated_data.get("organization")
        if not organization_name:
            organization_name = f"{name}'s organization"
        org = Organization(name=organization_name)
        org.add_admin(user_obj)
        org.save()
        user_obj.current_organization_id = org.pk
        user_obj.save()
        analytics.register_events(user_obj, org, None)
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
