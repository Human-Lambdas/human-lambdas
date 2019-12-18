import logging

from rest_framework.generics import CreateAPIView, RetrieveUpdateAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import User, Organization
from .serializers import UserSerializer, OrganizationSerializer

logger = logging.getLogger(__file__)


class RegistrationView(CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = User.objects.all()
    serializer_class = UserSerializer


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {"message": "Hello, World!"}
        return Response(content)


class UpdateUserView(RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        queryset = self.get_queryset()
        obj = get_object_or_404(queryset, name=self.request.user.name)
        return obj


class GetOrganizationView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

    def get_object(self):
        queryset = self.get_queryset().filter(user=self.request.user)
        obj = get_object_or_404(queryset, id=self.kwargs['pk'])
        return obj
