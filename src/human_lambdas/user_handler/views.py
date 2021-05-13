import logging

from django.shortcuts import get_object_or_404
from rest_framework.generics import (
    CreateAPIView,
    RetrieveUpdateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from human_lambdas.external.models import Token
from human_lambdas.hl_rest_api import analytics

from .models import Organization, User
from .permissions import IsOrgAdmin
from .serializers import APITokenUserSerializer, UserSerializer

logger = logging.getLogger(__name__)


class RegistrationView(CreateAPIView):
    permission_classes = (AllowAny,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        serializer.data["status_code"] = 201
        return Response(serializer.data, status=201, headers=headers)


class HelloView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        content = {"message": "Hello, Worldzzzzz!"}
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
        data["status_code"] = 200
        return Response(data, status=200)

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop("partial", False)
        instance = self.get_object()
        # change password work
        if request.data.get("currentPassword") or request.data.get("password"):
            if "currentPassword" not in request.data or "password" not in request.data:
                error_message = (
                    "Both the current password and the new password must be provided"
                )
                return Response(
                    {"status_code": 400, "errors": [{"message": error_message}]},
                    status=400,
                )
            if not instance.check_password(request.data["currentPassword"]):
                error_message = (
                    "The current password provided does not match the user password"
                )
                return Response(
                    {"status_code": 400, "errors": [{"message": error_message}]},
                    status=400,
                )
        # throw any errors otherwise let through
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        serializer.data["status_code"] = 200
        return Response(serializer.data, status=200)


class RetrieveUpdateRemoveUserOrgView(RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)
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
            return Response(
                {
                    "status_code": 403,
                    "errors": [{"message": "You cannot change your own role"}],
                },
                status=403,
            )
        else:
            org = Organization.objects.get(pk=kwargs["org_id"])
            try:
                if request.data["admin"]:
                    org.admin.add(user)
                    analytics.track(
                        self.request.user.pk, "Change Role", {"role": "admin"}
                    )
                    analytics.identify(self.request.user.pk, {"is_admin": True})
                    return Response(
                        {
                            "status_code": 200,
                            "message": "Users role was changed to admin",
                        },
                        status=200,
                    )
                else:
                    org.admin.remove(user)
                    analytics.track(
                        self.request.user.pk, "Change Role", {"role": "worker"}
                    )
                    analytics.identify(self.request.user.pk, {"is_admin": False})
                    return Response(
                        {
                            "status_code": 200,
                            "message": "Users role was changed to worker",
                        },
                        status=200,
                    )
            except KeyError:
                return Response(
                    {
                        "status_code": 400,
                        "errors": [
                            {"message": "payload should have the boolean field 'admin'"}
                        ],
                    },
                    status=400,
                )

    def destroy(self, request, *args, **kwargs):
        user = self.get_object()
        if request.user == user:
            return Response(
                {
                    "status_code": 403,
                    "errors": [{"message": "You cannot delete yourself"}],
                },
                status=403,
            )
        else:
            all_orgs_member = Organization.objects.filter(user=user)
            if all_orgs_member.count() == 1:
                user.delete()
                analytics.track(
                    self.request.user.pk, "Removed from Org", {"orgs_left": False}
                )
                return Response(status=204)
            else:
                org = all_orgs_member.get(pk=kwargs["org_id"])
                org.user.remove(user)
                org.admin.remove(user)
                analytics.track(
                    self.request.user.pk, "Removed from Org", {"orgs_left": True}
                )
                return Response(status=204)


class APIAuthToken(APIView):
    serializer_class = APITokenUserSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        if user.current_organization_id:
            token, created = Token.objects.get_or_create(
                user=user, organization=user.get_current_organization()
            )
            return Response(
                {
                    "status_code": 200,
                    "token": token.key,
                    "user_id": user.pk,
                    "email": user.email,
                    "organization_id": user.current_organization_id,
                },
                status=200,
            )
        else:
            return Response(
                {
                    "status_code": 400,
                    "errors": [
                        {"message": "user does not have a current organization set"}
                    ],
                },
                status=400,
            )
