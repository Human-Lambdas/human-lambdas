import logging

from rest_framework.generics import (
    CreateAPIView,
    RetrieveUpdateDestroyAPIView,
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

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=201, headers=headers)


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {"message": "Hello, World!"}
        return Response(content)


class RetrieveUpdateDestroyUserView(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_admin:
            organization_obj = Organization.objects.filter(user=user)
            or_condition = Q()
            for organization in organization_obj.all():
                or_condition.add(Q(organization=organization), Q.OR)
            return User.objects.filter(or_condition)
        else:
            return User.objects.filter(pk=user.pk)

    def get_object(self):
        obj = get_object_or_404(
            self.get_queryset(), id=self.kwargs["pk"]
        )  # name=self.request.user.name)
        return obj

    def destroy(self, request, *args, **kwargs):
        if self.request.user.is_admin:
            if request.user.pk == kwargs["pk"]:
                return Response({"Error": "You cannot delete yourself"}, status=403)
            else:
                user_obj = self.get_object()
                user_obj.delete()
                return Response(status=204)
        return Response(status=403)


class ListUsersView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        user = self.request.user
        if user.is_admin:
            organizations = Organization.objects.filter(user=user).all()
            return User.objects.filter(organization__in=organizations)
        else:
            return User.objects.filter(pk=user.pk)


class GetOrganizationView(RetrieveAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

    def get_queryset(self):
        user = self.request.user
        return Organization.objects.filter(user=user)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["org_id"])
        return obj


class APIAuthToken(APIView):
    serializer_class = APITokenUserSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key, "user_id": user.pk, "email": user.email})


class ListOrganizationView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = OrganizationSerializer

    def get_queryset(self):
        user = self.request.user
        return Organization.objects.filter(user=user)
