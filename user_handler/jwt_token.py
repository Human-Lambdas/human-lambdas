from django.conf import settings
from rest_framework import response
from rest_framework.generics import CreateAPIView
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


class GoogleToken(CreateAPIView):
    def create(self, request):
        try:
            token = request.data["token"]
            idinfo = id_token.verify_oauth2_token(
                token, requests.Request(), settings.GOOGLE_OAUTH_CLIENT_ID
            )
        except ValueError:
            # Invalid token
            pass
        email = idinfo["email"]
        user = User.objects.get(email=email)
        refresh = RefreshToken.for_user(user)

        return response.Response(
            {
                "refresh": str(refresh),
                "access": str(refresh.access_token),
            },
            status=200,
        )
