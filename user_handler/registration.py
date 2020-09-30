import logging

from rest_framework.generics import CreateAPIView, GenericAPIView
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import serializers
from hl_rest_api import analytics
from django.conf import settings
from django.utils import timezone
from hl_rest_api.utils import generate_unique_token

from .models import User, Organization, Notification, EmailVerification
from .apps import UserHandlerConfig


logger = logging.getLogger(__file__)


class RegisterSerializer(serializers.ModelSerializer):
    organization = serializers.CharField(
        max_length=128, allow_blank=True, write_only=True
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

    def trigger_verification(self, email, org):
        token = generate_unique_token(email, org.pk)
        EmailVerification(
            email=email,
            organization=org,
            token=token,
            expires_at=timezone.now()
            + timezone.timedelta(
                days=settings.EMAIL_VERIFICATION_EXPIRATION_WINDOW_DAYS
            ),
        ).save()

        verification_link = f"/{token}"
        template_data = {
            "url": verification_link,
        }
        UserHandlerConfig.emailclient.send_email(
            to_email=email,
            template_id=settings.EMAIL_VERIFICATION_TEMPLATE,
            template_data=template_data,
            group_id=int(settings.ACCOUNT_ASM_GROUPID),
        )

    def create(self, validated_data):
        name = validated_data["name"]
        password = validated_data["password"]
        email = validated_data["email"].lower()
        notification = Notification()
        notification.save()
        user_obj = User(
            name=name, email=email, notifications=notification, is_verified=False
        )
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
        # trigger verification email
        self.trigger_verification(email, org)
        return user_obj


class RegistrationView2(CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    # def create(self, request, *args, **kwargs):
    #     serializer = self.get_serializer(data=request.data)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_create(serializer)
    #     headers = self.get_success_headers(serializer.data)
    #     serializer.data["status_code"] = 201
    #     return Response(serializer.data, status=201, headers=headers)


class EmailVerificationView(GenericAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = EmailVerification.objects.all()

    def get(self, request, *args, **kwargs):
        obj = get_object_or_404(self.get_queryset(), token=kwargs["token"])
        user = request.user
        if request.user.email != obj.email:
            return Response(
                {
                    "status_code": 400,
                    "errors": [
                        {"message": "you must be logged in with the right user"}
                    ],
                },
                status=400,
            )
        user.is_verified = True
        user.save()
        return Response(
            {"status_code": 200, "message": f"User {obj.email} is verfied",}, status=200
        )
