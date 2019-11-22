import logging

from rest_framework import serializers
from rest_framework.authtoken.models import Token

from .models import User, Organization

logger = logging.getLogger(__file__)


# Serializers define the API representation.
class UserCreateSerializer(serializers.ModelSerializer):
    organization = serializers.CharField(max_length=128, allow_blank=False)
    class Meta:
        model = User
        fields = ['name', 'password', 'email', 'organization', 'is_admin']
        extra_kwargs={ "password":
                           {"write_only": True}
                       }

    def create(self, validated_data):
        name = validated_data['name']
        password = validated_data['password']
        email = validated_data['email']
        is_admin = validated_data['is_admin']
        organization_name = validated_data['organization']
        organization_obj = Organization(name=organization_name)
        organization_obj.save()
        user_obj = User(name=name,
             email=email,
             is_admin=is_admin)
        user_obj.set_password(password)
        user_obj.save()
        organization_obj.user.add(user_obj)
        return validated_data


class UserLoginSerializer(serializers.ModelSerializer):
    token = serializers.CharField(allow_blank=True, read_only=True)
    email = serializers.EmailField(label="Email Address")

    class Meta:
        model = User
        fields = ['email', 'password', 'token']
        extra_kwargs={ "password":
                           {"write_only": True}
                       }

    def validate(self, data):
        email = data.get("email", None)
        logger.info("Email to be valiated is %s", email)
        password = data["password"]
        user = User.objects.filter(email=email)
        if user.exists() and user.count() == 1:
            user_obj = user.first()
            logger.info("The user %s exists", user_obj)
            if not user_obj.check_password(password):
                raise serializers.ValidationError("Incorrect credentials, please try again")
            token, exists = Token.objects.get_or_create(user=user_obj)
            data["token"] = token
        else:
            raise serializers.ValidationError("Incorrect credentials, please try again")
        return data
