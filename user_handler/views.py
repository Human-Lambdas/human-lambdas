import logging

from rest_framework.generics import (
    CreateAPIView,
    RetrieveUpdateAPIView,
    RetrieveAPIView,
    ListAPIView,
)
from django.db.models import Q
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.authtoken.models import Token

from .models import User, Organization
from .serializers import UserSerializer, OrganizationSerializer, APITokenUserSerializer

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


class RetrieveUpdateUserView(RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), name=self.request.user.name)
        return obj


class ListUsersView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        user = self.request.user
        organization_obj = Organization.objects.filter(user=user)
        or_condition = Q()
        for organization in organization_obj.all():
            or_condition.add(Q(organization=organization), Q.OR)
        return User.objects.filter(or_condition)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["pk"])
        return obj


class GetOrganizationView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

    def get_queryset(self):
        user = self.request.user
        return Organization.objects.filter(user=user)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["pk"])
        return obj


class APIAuthToken(APIView):
    serializer_class = APITokenUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key, "user_id": user.pk, "email": user.email})
