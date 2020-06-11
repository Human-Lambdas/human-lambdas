from sendgrid.helpers.mail import Mail
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from django.template.loader import get_template
from django.conf import settings
from django.utils import timezone
from user_handler.permissions import IsOrgAdmin
from user_handler.models import User, Organization, Invitation
from hl_rest_api.utils import SendGridClient, is_invalid_email, generate_unique_token


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
                invites_to_delete = Invitation.objects.filter(
                    organization__pk=invitation_org.id, email=invite.email
                )
                for invite_to_delete in invites_to_delete:
                    invite_to_delete.delete()
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
                invites_to_delete = Invitation.objects.filter(
                    organization__pk=invitation_org.id, email=invite.email
                )
                for invite_to_delete in invites_to_delete:
                    invite_to_delete.delete()
                return Response(
                    {"status_code": 200, "message": "Success!", "email": invite.email},
                    status=200,
                )
