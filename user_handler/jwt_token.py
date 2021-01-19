from django.conf import settings
from rest_framework import serializers
from rest_framework.generics import CreateAPIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from hl_rest_api import analytics
from user_handler.models import User


class HLTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token["email"] = user.email
        token["name"] = user.name
        analytics.track(user.pk, "Get Token")
        return token


class HLTokenObtainPairView(TokenObtainPairView):
    serializer_class = HLTokenObtainPairSerializer


from google.auth.transport import requests
from google.oauth2 import id_token
from rest_framework_simplejwt.tokens import RefreshToken


class GoogleTokenSerializer(serializers.Serializer):
    token = serializers.CharField()

    def is_valid(self, raise_exception):
        return super().is_valid(raise_exception=raise_exception)


class GoogleToken(CreateAPIView):
    serializer_class = GoogleTokenSerializer
    permission_classes = (AllowAny,)

    def create(self, request):
        serializer = GoogleTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        token = request.data["token"]
        try:
            idinfo = id_token.verify_oauth2_token(
                token, requests.Request(), settings.GOOGLE_OAUTH_CLIENT_ID
            )
        except ValueError as ex:
            return Response(
                {
                    "status_code": 400,
                    "errors": [
                        {"message": f"Invalid token. {ex.args[0]}\n\n'{token}'"}
                    ],
                },
                status=400,
            )
        email = idinfo["email"]
        users = User.objects.filter(email=email)
        if not users.exists():
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": f"no user exists for {email}"}],
                },
                status=400,
            )

        assert len(users) == 1
        refresh = RefreshToken.for_user(users.first())

        return Response(
            {
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            },
            status=200,
        )
