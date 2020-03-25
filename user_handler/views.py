import logging
import re
import csv
from io import StringIO

from sendgrid.helpers.mail import Mail
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
from django.template.loader import get_template
from django.conf import settings
from django.utils import timezone
from user_handler.permissions import IsOrgAdmin

from .models import User, Organization, Invitation
from .serializers import UserSerializer, OrganizationSerializer, APITokenUserSerializer
from .utils import SendGridClient

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
        return Response(data)

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
        return Response(serializer.data)


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
                        {"message": "Users role was changed to admin"}, status=200
                    )
                else:
                    org.admin.remove(user)
                    return Response(
                        {"message": "Users role was changed to worker"}, status=200
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


class SendInviteView(APIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)

    def post(self, request, *args, **kwargs):
        stripped_email_list = StringIO("".join(request.data["emails"].split()))
        reader = csv.reader(stripped_email_list, delimiter=",")
        email_set = set(next(reader))
        # convert to set to ignore any duplicated emails

        invalid_email_list = []
        already_added_email_list = []

        for email in email_set:
            if bool(re.fullmatch(r"\"?([-a-zA-Z0-9_.`?{}]+@\w+\.\w+)\"?", email)):
                # checks the email is valid
                user = User.objects.filter(email=email).first()
                organization = Organization.objects.get(pk=kwargs["org_id"])
                if user not in organization.user.all():
                    token = hash(f"{email}{kwargs['org_id']}{timezone.now()}")
                    expiry_date = timezone.now() + timezone.timedelta(30)
                    invite = Invitation(
                        email=email,
                        organization=organization,
                        invited_by=request.user,
                        token=token,
                        expires_at=expiry_date,
                    )
                    invite.save()

                    invite_link = settings.FRONT_END_BASE_URL
                    if not user:
                        invite_link += "invite/{0}".format(token)
                    else:
                        invite_link += "invite/success/{0}".format(token)

                    render_info = {
                        "organization_name": organization.name,
                        "invite_sender": request.user.name,
                        "invite_link": invite_link,
                    }

                    # plain_text = get_template("invite.txt")
                    htmly = get_template("invite.html")

                    # text_content = plain_text.render(render_info)
                    html_content = htmly.render(render_info)

                    message = Mail(
                        from_email="no-reply@humanlambdas.com",
                        to_emails=email,
                        subject="Human Lambdas workflow invitation",
                        html_content=html_content,
                    )
                    sg = SendGridClient()
                    sg.send(message)
                else:
                    already_added_email_list.append(email)
            else:
                invalid_email_list.append(email)

        # sending responses
        if len(invalid_email_list) == 0 and len(already_added_email_list) == 0:
            return Response(
                {"message": "all emails were successfully added!"}, status=200
            )
        if len(invalid_email_list) > 0 and len(already_added_email_list) > 0:
            response_text = ""
            for email in invalid_email_list:
                response_text += "{0} is an invalid email. ".format(email)
            for email in already_added_email_list:
                response_text += "{0} is already a part of the organization,".format(
                    email
                )
                response_text += " and so does not need to be added again. "
            return Response(
                {"status_code": 400, "errors": [{"message": response_text}]}, status=400
            )
        if len(invalid_email_list) > 0:
            response_text = ""
            for email in invalid_email_list:
                response_text += "{0} is an invalid email. ".format(email)
            return Response(
                {"status_code": 400, "errors": [{"message": response_text}]}, status=400
            )
        if len(already_added_email_list) > 0:
            response_text = ""
            for email in already_added_email_list:
                response_text += "{0} is already a part of the organization,".format(
                    email
                )
                response_text += " and so does not need to be added again. "
            return Response(
                {"status_code": 400, "errors": [{"message": response_text}]}, status=400
            )


class InvitationView(APIView):
    permission_classes = (AllowAny,)
    def get(self, request, *args, **kwargs):
        invite = Invitation.objects.filter(token=self.kwargs["invite_token"])
        if not invite.exists():
            return Response(
                {
                    "status_code": 404,
                    "errors": [{"message": "no invitation with this token exists"}],
                },
                status=404,
            )
        else:
            invitation_email, invitation_org = (
                invite.first().email,
                invite.first().organization.name,
            )
            return Response(
                {
                    "invitation_email": invitation_email,
                    "invitation_org": invitation_org,
                },
                status=200,
            )

    def post(self, request, *args, **kwargs):
        invite = Invitation.objects.filter(token=self.kwargs["invite_token"]).first()
        if invite is None:
            return Response(
                {
                    "status_code": 404,
                    "errors": [{"message": "no invitation with this token exists"}],
                },
                status=404,
            )
        if invite.expires_at < timezone.now():
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": "this token has expired!"}],
                },
                status=400,
            )
        else:
            invitation_org = invite.organization
            if Organization.objects.filter(
                user__email=invite.email, name=str(invitation_org)
            ).exists():
                return Response(
                    {
                        "status_code": 400,
                        "errors": [
                            {"message": "this organization has already been joined"}
                        ],
                    },
                    status=400,
                )
            if User.objects.filter(email=invite.email).first() is None:
                new_user = User(email=invite.email, name=request.data["name"])
                new_user.set_password(request.data["password"])
                new_user.current_organization_id = invitation_org.id
                new_user.save()
                invitation_org.user.add(new_user)
                return Response(
                    {
                        "message": "Your account has been created!",
                        "email": invite.email,
                    },
                    status=201,
                )
            else:
                user = User.objects.filter(email=invite.email).first()
                invitation_org.user.add(user)
                return Response({"message": "Success!"}, status=200)


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
