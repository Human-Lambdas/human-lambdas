import logging

from rest_framework import serializers

from human_lambdas.hl_rest_api import analytics
from human_lambdas.workflow_handler.utils import create_template

from .models import Notification, Organization, User

logger = logging.getLogger(__name__)


# Serializers define the API representation.
class UserSerializer(serializers.ModelSerializer):
    organization = serializers.CharField(
        max_length=128,
        allow_blank=True,
        write_only=True,
        allow_null=True,
        required=False,
    )
    password = serializers.CharField(min_length=8, write_only=True, required=False)
    template_id = serializers.IntegerField(write_only=True, required=False)

    class Meta:
        model = User
        fields = [
            "name",
            "password",
            "email",
            "organization",
            "current_organization_id",
            "id",
            "template_id",
        ]
        extra_kwargs = {
            "password": {"write_only": True},
            "template_id": {"write_only": True},
            "id": {"read_only": True},
        }

    def create(self, validated_data):
        name = validated_data["name"]
        password = validated_data.get("password")
        email = validated_data["email"].lower()
        notification = Notification()
        notification.save()
        user_obj = User(name=name, email=email, notifications=notification)
        if password:
            user_obj.set_password(password)
        user_obj.save()
        organization_name = validated_data.get("organization")
        if not organization_name:
            organization_name = f"{name}'s organization"
        org = Organization(name=organization_name)
        org.save()
        org.add_admin(user_obj)
        user_obj.current_organization_id = org.pk
        user_obj.save()
        analytics.signup_events(user_obj, org)
        create_template(validated_data.get("template_id"), user_obj, org)
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
