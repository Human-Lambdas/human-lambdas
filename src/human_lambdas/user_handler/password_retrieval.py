import logging

from django.conf import settings
from django.utils import timezone
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from human_lambdas.hl_rest_api.utils import (
    generate_unique_token,
    is_invalid_email,
)

from .apps import UserHandlerConfig
from .models import ForgottenPassword, User

logger = logging.getLogger(__name__)


class SendForgottenPasswordView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        if is_invalid_email(request.data["email"]):
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": "This email is not valid"}],
                },
                status=400,
            )

        if not User.objects.filter(email=request.data["email"]).exists():
            return Response(
                {"status_code": 404, "errors": [{"message": "Email does not exist"}]},
                status=200,
            )
        token = generate_unique_token(request.data["email"])
        ForgottenPassword(
            email=request.data["email"],
            token=token,
            expires_at=timezone.now() + timezone.timedelta(15),
        ).save()
        password_link = "{0}forgot/{1}".format(settings.FRONT_END_BASE_URL, token)
        template_data = {"url": password_link}

        logger.info(
            f"password reset link for {request.data['email']} is: {password_link}"
        )

        if settings.ACCOUNT_ASM_GROUPID:
            UserHandlerConfig.emailclient.send_email(
                to_email=request.data["email"],
                template_id=settings.FORGOTTEN_PASSWORD_TEMPLATE,
                template_data=template_data,
                group_id=int(settings.ACCOUNT_ASM_GROUPID),
            )
        return Response(
            {"status_code": 200, "message": "Password Recovery Link Created"},
            status=200,
        )


class ForgottenPasswordView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        forgotten_password = ForgottenPassword.objects.filter(
            token=self.kwargs["token"]
        )
        if forgotten_password.exists():
            return Response(
                {"status_code": 200},
                status=200,
            )
        else:
            return Response(
                {
                    "status_code": 404,
                    "errors": [
                        {"message": "this forgotten password token is not valid"}
                    ],
                },
                status=404,
            )

    def post(self, request, *args, **kwargs):
        forgotten_password = ForgottenPassword.objects.filter(token=kwargs["token"])
        if not forgotten_password.exists():
            return Response(
                {"status_code": 400, "errors": [{"message": "this token is invalid"}]},
                status=400,
            )
        if "password" not in self.request.data:
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": "no password has been attached"}],
                },
                status=400,
            )
        if len(self.request.data["password"]) < 8:
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": "passwords must be at least 8 characters"}],
                },
                status=400,
            )
        if forgotten_password.first().expires_at < timezone.now():
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": "this token has expired!"}],
                },
                status=400,
            )
        user = User.objects.filter(email=forgotten_password.first().email)
        if not user.exists():
            return Response(
                {"status_code": 400, "errors": [{"message": "an error occurred"}]},
                status=400,
            )
        user_to_change = user.first()
        user_to_change.set_password(self.request.data["password"])
        user_to_change.save()
        return Response(
            {"status_code": 200, "message": "your password has been reset!"},
            status=200,
        )
