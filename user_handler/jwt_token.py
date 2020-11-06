from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView

from hl_rest_api import analytics


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
