import logging

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

from .models import User, Organization, Invitation, ForgottenPassword
from .serializers import UserSerializer, OrganizationSerializer, APITokenUserSerializer
from .utils import SendGridClient, is_invalid_email, generate_unique_token

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


class SendForgottenPasswordView(APIView):
    permission_classes = (AllowAny,)

    def post(self, request):
        if is_invalid_email(request.data["email"]):
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": "This email is not valid"}],
                },
                status=400,
            )

        token = generate_unique_token(request.data["email"])
        forgotten_password = ForgottenPassword(
            email=request.data["email"],
            token=token,
            expires_at=timezone.now() + timezone.timedelta(15),
        )

        password_link = "{0}forgot/{1}".format(settings.FRONT_END_BASE_URL, token)

        html_content = get_template("forgottenPassword.html").render(
            {"password_link": password_link}
        )

        forgotten_password.save()

        message = Mail(
            from_email=("no-reply@humanlambdas.com", "Human Lambdas"),
            to_emails=request.data["email"],
            subject="Human Lambdas Password Reset",
            html_content=html_content,
        )
        sg = SendGridClient()
        sg.send(message)

        return Response(
            {"status_code": 200, "message": "We have sent an email to this address"},
            status=200,
        )


class ForgottenPasswordView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        forgotten_password = ForgottenPassword.objects.filter(
            token=self.kwargs["token"]
        )
        if forgotten_password.exists():
            return Response({"status_code": 200}, status=200,)
        else:
            return Response(
                {
                    "status_code": 404,
                    "errors": [
                        {"message": "this forgotten password token is not valid"}
                    ],
                },
                status=404,
            )

    def post(self, request, *args, **kwargs):
        forgotten_password = ForgottenPassword.objects.filter(token=kwargs["token"])
        if not forgotten_password.exists():
            return Response(
                {"status_code": 400, "errors": [{"message": "this token is invalid"}]},
                status=400,
            )
        if "password" not in self.request.data:
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": "no password has been attached"}],
                },
                status=400,
            )
        if len(self.request.data["password"]) < 8:
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": "passwords must be at least 8 characters"}],
                },
                status=400,
            )
        if forgotten_password.first().expires_at < timezone.now():
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": "this token has expired!"}],
                },
                status=400,
            )
        user = User.objects.filter(email=forgotten_password.first().email)
        if not user.exists():
            return Response(
                {"status_code": 400, "errors": [{"message": "an error occurred"}]},
                status=400,
            )
        user_to_change = user.first()
        user_to_change.set_password(self.request.data["password"])
        user_to_change.save()
        return Response(
            {"status_code": 200, "message": "your password has been reset!"},
            status=200,
        )


class SendInviteView(APIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)

    def get(self, request, *args, **kwargs):
        invited_users = set(
            Invitation.objects.filter(organization__pk=self.kwargs["org_id"])
        )
        invited_users_cleaned = []
        for invited_user in invited_users:
            invited_users_cleaned.append(
                {
                    "email": invited_user.email,
                    "pending": True,
                    "is_admin": invited_user.admin,
                }
            )
        return Response(
            {"status_code": 200, "invited_users": invited_users_cleaned}, status=200
        )

    def post(self, request, *args, **kwargs):
        email_set = set("".join(request.data["emails"].split()).split(","))
        invalid_email_list, already_added_email_list = [], []

        for email in email_set:
            if is_invalid_email(email):
                invalid_email_list.append(email)
                continue

            user = User.objects.filter(email=email).first()
            organization = Organization.objects.get(pk=kwargs["org_id"])

            if user in organization.user.all():
                already_added_email_list.append(email)
                continue

            token = generate_unique_token(email, kwargs["org_id"])
            invite = Invitation(
                email=email,
                organization=organization,
                invited_by=request.user,
                token=token,
                expires_at=timezone.now() + timezone.timedelta(30),
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

            html_content = get_template("invite.html").render(render_info)

            message = Mail(
                from_email=("no-reply@humanlambdas.com", "Human Lambdas"),
                to_emails=email,
                subject="Human Lambdas invitation",
                html_content=html_content,
            )
            sg = SendGridClient()
            sg.send(message)

        # sending responses
        if len(invalid_email_list) == 0 and len(already_added_email_list) == 0:
            return Response(
                {"status_code": 200, "message": "all emails were successfully added!"},
                status=200,
            )
        response_text = ""
        for email in invalid_email_list:
            response_text += "{0} is an invalid email. ".format(email)
        for email in already_added_email_list:
            response_text += "{0} is already a part of the organization. ".format(email)
        return Response(
            {"status_code": 400, "errors": [{"message": response_text}]}, status=400
        )

    def patch(self, request, *args, **kwargs):
        invites = Invitation.objects.filter(
            email=self.request.data["email"], organization__pk=self.kwargs["org_id"]
        )
        if not invites.exists():
            return Response(
                {
                    "status_code": 400,
                    "errors": [
                        {"message": "there are no invitations to this user to update"}
                    ],
                },
                status=400,
            )
        for invite in invites:
            invite.admin = True if self.request.data["admin"] else False
            invite.save()
        if self.request.data["admin"]:
            response_text = "this invitation has now been set to admin status"
        else:
            response_text = "this invitation has now been set to worker status"
        return Response({"status_code": 200, "message": response_text}, status=200)

    def delete(self, request, *args, **kwargs):
        invites = Invitation.objects.filter(
            email=self.request.data["email"], organization__pk=self.kwargs["org_id"]
        )
        if not invites.exists():
            return Response(
                {
                    "status_code": 400,
                    "errors": [
                        {"message": "there are no invitations to this user to delete"}
                    ],
                },
                status=400,
            )
        for invite in invites:
            invite.delete()
        response_text = "this invite has now been deleted"
        return Response({"status_code": 200, "message": response_text}, status=200)


class InvitationView(APIView):
    permission_classes = (AllowAny,)

    def get(self, request, *args, **kwargs):
        invite = Invitation.objects.filter(token=self.kwargs["invite_token"])
        if not invite.exists():
            return Response(
                {
                    "status_code": 404,
                    "errors": [
                        {
                            "message": "this invitation has either been revoked, or is invalid"
                        }
                    ],
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
                    "status_code": 200,
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
            if not User.objects.filter(email=invite.email).exists():
                new_user = User(
                    email=invite.email,
                    name=request.data["name"],
                    current_organization_id=invitation_org.id,
                )
                new_user.set_password(request.data["password"])
                new_user.save()
                invitation_org.add_admin(
                    new_user
                ) if invite.admin else invitation_org.user.add(new_user)
                return Response(
                    {
                        "status_code": 201,
                        "message": "Your account has been created!",
                        "email": invite.email,
                    },
                    status=201,
                )
            else:
                user = User.objects.filter(email=invite.email).first()
                invitation_org.add_admin(
                    user
                ) if invite.admin else invitation_org.user.add(user)
                return Response(
                    {"status_code": 200, "message": "Success!", "email": invite.email},
                    status=200,
                )


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
        return Response(
            {
                "status_code": 200,
                "token": token.key,
                "user_id": user.pk,
                "email": user.email,
            },
            status=200,
        )


class ListOrganizationView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = OrganizationSerializer

    def get_queryset(self):
        user = self.request.user
        return Organization.objects.filter(user=user)
