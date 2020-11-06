from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveUpdateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from user_handler.models import Organization, User
from user_handler.permissions import IsAdminOrReadOnly
from user_handler.serializers import UserSerializer

from .serializers import OrganizationSerializer


class CreateOrganization(CreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = OrganizationSerializer

    def post(self, request, *args, **kwargs):
        request.data["user"] = [request.user.pk]
        request.data["admin"] = [request.user.pk]
        return self.create(request, *args, **kwargs)


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
                    return Response(
                        {
                            "status_code": 200,
                            "message": "Users role was changed to admin",
                        },
                        status=200,
                    )
                else:
                    org.admin.remove(user)
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
                return Response(
                    {"status_code": 204, "message": "User was deleted"}, status=204
                )
            else:
                org = all_orgs_member.get(pk=kwargs["org_id"])
                org.user.remove(user)
                org.admin.remove(user)
                return Response(
                    {
                        "status_code": 204,
                        "message": "User was deleted from organization",
                    },
                    status=204,
                )


class ListOrgUsersView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(organization__user=user)

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


class GetOrganizationView(RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated, IsAdminOrReadOnly)
    queryset = Organization.objects.all()
    serializer_class = OrganizationSerializer

    def get_queryset(self):
        user = self.request.user
        return Organization.objects.filter(user=user)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset(), id=self.kwargs["org_id"])
        return obj


class ListOrganizationView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = OrganizationSerializer

    def get_queryset(self):
        user = self.request.user
        return Organization.objects.filter(user=user)
