# import logging
#
# from rest_framework.generics import CreateAPIView, GenericAPIView
# from rest_framework.permissions import AllowAny, IsAuthenticated
# from rest_framework.response import Response
# from django.shortcuts import get_object_or_404
# from rest_framework import serializers
# from hl_rest_api import analytics
# from django.conf import settings
# from django.utils import timezone
# from hl_rest_api.utils import generate_unique_token
#
# from .models import User, Organization, Notification, EmailVerification
# from .apps import UserHandlerConfig
#
#
# logger = logging.getLogger(__file__)
#
#
# class RegisterSerializer(serializers.ModelSerializer):
#     organization = serializers.CharField(
#         max_length=128, allow_blank=True, write_only=True
#     )
#     password = serializers.CharField(min_length=8, write_only=True)
#
#     class Meta:
#         model = User
#         fields = [
#             "name",
#             "password",
#             "email",
#             "organization",
#             "current_organization_id",
#             "id",
#         ]
#         extra_kwargs = {
#             "password": {"write_only": True},
#             "id": {"read_only": True},
#             "current_organization_id": {"read_only": True},
#         }
#
#     def create(self, validated_data):
#         name = validated_data["name"]
#         password = validated_data["password"]
#         email = validated_data["email"].lower()
#         notification = Notification()
#         notification.save()
#         user_obj = User(
#             name=name, email=email, notifications=notification
#         )
#         user_obj.set_password(password)
#         user_obj.save()
#         organization_name = validated_data.get("organization")
#         if not organization_name:
#             organization_name = f"{name}'s organization"
#         org = Organization(name=organization_name)
#         org.add_admin(user_obj)
#         org.save()
#         user_obj.current_organization_id = org.pk
#         user_obj.save()
#         analytics.register_events(user_obj, org, None)
#         return user_obj
