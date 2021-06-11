import logging

from django.conf import settings
from django.shortcuts import get_object_or_404
from django.utils import timezone
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from human_lambdas.hl_rest_api import analytics
from human_lambdas.hl_rest_api.utils import (
    generate_unique_token,
    is_invalid_email,
)
from human_lambdas.user_handler.models import (
    Invitation,
    Notification,
    Organization,
    User,
)
from human_lambdas.user_handler.permissions import IsOrgAdmin
from human_lambdas.workflow_handler.models import WorkflowNotification

from .apps import UserHandlerConfig

logger = logging.getLogger(__name__)


class SendInviteView(APIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)

    def get_queryset(self):
        return Invitation.objects.filter(
            organization__pk=self.kwargs["org_id"]
        ).distinct()

    def get(self, request, *args, **kwargs):
        invited_users = [
            {
                "email": invitation.email,
                "pending": True,
                "is_admin": invitation.admin,
                "link": invitation.invite_link,
            }
            for invitation in self.get_queryset()
        ]
        return Response(
            {"status_code": 200, "invited_users": invited_users}, status=200
        )

    def post(self, request, *args, **kwargs):
        email_set = set("".join(request.data["emails"].split()).split(","))
        invalid_email_list, already_added_email_list = [], []
        organization = Organization.objects.get(pk=kwargs["org_id"])
        template_data = []
        emails = []
        links = {}
        for email in email_set:
            if is_invalid_email(email):
                invalid_email_list.append(email)
                continue

            if organization.user.filter(email=email).exists():
                already_added_email_list.append(email)
                continue

            for inv in self.get_queryset().filter(email=email):
                inv.delete()

            token = generate_unique_token(email, kwargs["org_id"])

            if not User.objects.filter(email=email).exists():
                invite_link = "{0}invite/{1}".format(settings.FRONT_END_BASE_URL, token)
                analytics.track(self.request.user.pk, "Invite user", {"new_user": True})
                analytics.track(email, "Invited new user")
            else:
                invite_link = "{0}invite/success/{1}".format(
                    settings.FRONT_END_BASE_URL, token
                )
                analytics.track(
                    self.request.user.pk, "Invite user", {"new_user": False}
                )

            template_data.append(
                {
                    "org_name": organization.name,
                    "inviter_name": request.user.name,
                    "url": invite_link,
                }
            )

            Invitation(
                email=email,
                organization=organization,
                invited_by=request.user,
                token=token,
                invite_link=invite_link,
                expires_at=timezone.now()
                + timezone.timedelta(days=settings.INVITATION_EXPIRATION_WINDOW_DAYS),
            ).save()

            links[email] = invite_link
            emails.append(email)

        if settings.INVITATION_TEMPLATE is None or settings.ACCOUNT_ASM_GROUPID is None:
            logger.warn("Sendgrid not set up, ignoring email trigger")
        else:
            UserHandlerConfig.emailclient.send_email(
                to_email=emails,
                template_id=settings.INVITATION_TEMPLATE,
                template_data=template_data,
                group_id=int(settings.ACCOUNT_ASM_GROUPID),
            )

        # sending responses
        if len(invalid_email_list) == 0 and len(already_added_email_list) == 0:
            return Response(
                {
                    "status_code": 200,
                    "message": "all emails were successfully added!",
                    "links": links,
                },
                status=200,
            )
        response_text = ""
        for email in invalid_email_list:
            response_text += "{0} is an invalid email. ".format(email)
        for email in already_added_email_list:
            response_text += "{0} is already a part of the organization. ".format(email)
        return Response(
            {
                "status_code": 400,
                "errors": [{"message": response_text}],
                "links": links,
            },
            status=400,
        )

    def patch(self, request, *args, **kwargs):
        invites = self.get_queryset().filter(email=self.request.data["email"])
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
        invites = self.get_queryset().filter(email=self.request.data["email"])
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

    def get_queryset(self):
        return Invitation.objects.filter(token=self.kwargs["invite_token"])

    def get(self, request, *args, **kwargs):
        invite = get_object_or_404(self.get_queryset())
        invitation_email, invitation_org = (
            invite.email,
            invite.organization.name,
        )
        analytics.track(invite.email, "Invited new user visit")
        return Response(
            {
                "status_code": 200,
                "invitation_email": invitation_email,
                "invitation_org": invitation_org,
            },
            status=200,
        )

    def post(self, request, *args, **kwargs):
        invite = get_object_or_404(self.get_queryset())
        if invite.expires_at < timezone.now():
            return Response(
                {
                    "status_code": 400,
                    "errors": [{"message": "this token has expired!"}],
                },
                status=400,
            )

        invitation_org = invite.organization
        if invitation_org.user.filter(email=invite.email).exists():
            return Response(
                {
                    "status_code": 400,
                    "errors": [
                        {"message": "this organization has already been joined"}
                    ],
                },
                status=400,
            )
        user = User.objects.filter(email=invite.email).first()
        if not user:
            notification = Notification()
            notification.save()
            user = User(
                email=invite.email,
                name=request.data["name"],
                current_organization_id=invitation_org.id,
                notifications=notification,
            )
            user.set_password(request.data["password"])
            user.save()
            response_data = {
                "data": {
                    "status_code": 201,
                    "message": "Your account has been created!",
                    "email": invite.email,
                },
                "status": 201,
            }
            analytics.track(user.email, "Invited new user signed up")
            analytics.alias(user.email, user.pk)
            analytics.track(user.pk, "User Signup", {"source": "invite"})
        else:
            response_data = {
                "data": {
                    "status_code": 200,
                    "message": "Success!",
                    "email": invite.email,
                },
                "status": 200,
            }
            analytics.track(user.pk, "Existing user joined new org", {"new": False})

        for workflow in invitation_org.workflow_set.all():
            WorkflowNotification(
                workflow=workflow, notification=user.notifications
            ).save()

        if invite.admin:
            invitation_org.add_admin(user)
            analytics.identify(
                user.pk,
                {
                    "is_admin": True,
                    "org_id": invitation_org.pk,
                    "org_name": invitation_org.name,
                    "name": user.name,
                    "email": user.email,
                    "user_id": user.pk,
                },
            )
        else:
            invitation_org.user.add(user)
            analytics.identify(
                user.pk,
                {
                    "is_admin": False,
                    "org_id": invitation_org.pk,
                    "org_name": invitation_org.name,
                    "name": user.name,
                    "email": user.email,
                    "user_id": user.pk,
                },
            )

        Invitation.objects.filter(
            organization__pk=invitation_org.id, email=invite.email
        ).all().delete()

        return Response(**response_data)
