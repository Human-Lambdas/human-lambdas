import logging

from rest_framework.generics import (
    CreateAPIView,
    RetrieveUpdateAPIView,
    RetrieveAPIView,
    ListAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, get_list_or_404
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


class RetrieveUpdateUserView(RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(pk=user.pk)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["pk"])
        return obj

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        is_admin = (
            Organization.objects.filter(pk=instance.current_organization_id)
            .filter(admin=instance)
            .exists()
        )
        data = serializer.data
        data["is_admin"] = is_admin
        return Response(data)


class RetrieveUpdateRemoveUserOrgView(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        organization = (
            Organization.objects.filter(pk=self.kwargs["org_id"])
            .filter(admin=self.request.user)
            .first()
        )
        return User.objects.filter(organization=organization)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["user_id"])
        return obj

    def update(self, request, *args, **kwargs):
        user = self.get_object()
        if request.user == user:
            return Response({"Error": "You cannot change your own role"}, status=403)
        else:
            org = Organization.objects.get(pk=kwargs["org_id"])
            try:
                if request.data["admin"]:
                    org.admin.add(user)
                    return Response(
                        {"message": "Users role was changed to admin"}, status=200
                    )
                else:
                    org.admin.remove(user)
                    return Response(
                        {"message": "Users role was changed to worker"}, status=200
                    )
            except KeyError:
                return Response(
                    {"error": "payload should have the boolean field 'admin'"},
                    status=400,
                )

    def destroy(self, request, *args, **kwargs):
        user = self.get_object()
        if request.user == user:
            return Response({"Error": "You cannot delete yourself"}, status=403)
        else:
            all_orgs_member = Organization.objects.filter(user=user)
            if all_orgs_member.count() == 1:
                user.delete()
                return Response({"message": "User was deleted"}, status=204)
            else:
                org = all_orgs_member.objects.get(pk=kwargs["org_id"])
                org.user.remove(user)
                org.admin.remove(user)
                return Response(
                    {"message": "User was deleted from organization"}, status=204
                )


class ListOrgUsersView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        user = self.request.user
        organization = (
            Organization.objects.filter(pk=self.kwargs["org_id"])
            .filter(admin=user)
            .first()
        )
        if organization:
            return User.objects.filter(organization=organization)
        else:
            return User.objects.filter(pk=user.pk)

    def list(self, request, *args, **kwargs):
        obj = get_list_or_404(self.get_queryset())
        serializer = self.serializer_class(obj, many=True)
        result = []
        for user in serializer.data:
            user["is_admin"] = (
                Organization.objects.filter(pk=user["current_organization_id"])
                .filter(admin__pk=user["id"])
                .exists()
            )
            result.append(user)
        return Response(result)


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

    def get(self, request, *args, **kwargs):
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
