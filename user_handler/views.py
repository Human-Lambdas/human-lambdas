import logging

from rest_framework.generics import CreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import User
from .serializers import UserCreateSerializer

logger = logging.getLogger(__file__)


# ViewSets define the view behavior.
class RegistrationView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserCreateSerializer


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {"message": "Hello, World!"}
        return Response(content)
