import logging
import re
import csv
from io import StringIO
import datetime

import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

from django.utils.timezone import make_aware
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

from django.template.loader import get_template

from .models import User, Organization, Invitation
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
            organization_obj = Organization.objects.filter(user=user)
            or_condition = Q()
            for organization in organization_obj.all():
                or_condition.add(Q(organization=organization), Q.OR)
            return User.objects.filter(or_condition)
        else:
            return User.objects.filter(pk=user.pk)

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


class SendInviteView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        stripped_email_list = StringIO("".join(request.data["emails"].split()))
        reader = csv.reader(stripped_email_list, delimiter=",")
        email_set = set(next(reader))
        # convert to set to ignore any duplicated emails

        invite_org = Organization.objects.filter(
            name=request.data["organization"], user=request.user
        )
        if invite_org is None:
            # ensure user is inviting to an organization they belong to
            return Response(
                {"error": "You are not a member of this organization"}, status=401
            )

        invalid_email_list = []
        already_added_email_list = []

        for email in email_set:
            if bool(re.fullmatch(r"\"?([-a-zA-Z0-9.`?{}]+@\w+\.\w+)\"?", email)):
                # checks the email is valid
                userObj = User.objects.filter(email=email)
                organization = Organization.objects.filter(
                    name=request.data["organization"], user=userObj.first()
                )
                if organization.first() is None:
                    # send
                    to_hash = str(email + request.data["organization"])
                    token = hash(to_hash)

                    naive_expiry_date = datetime.datetime.now() + datetime.timedelta(14)
                    aware_expiry_date = make_aware(naive_expiry_date)

                    invite = Invitation(
                        email=email,
                        organization=invite_org.first(),
                        invited_by=request.user,
                        token=token,
                        expires_at=aware_expiry_date,
                    )

                    render_info = {
                        "organization_name": request.data["organization"],
                        "invite_sender": request.user.name,
                        "invite_link": "HL-URL/{0}".format(token),
                    }

                    # plain_text = get_template("invite.txt")
                    htmly = get_template("invite.html")

                    # text_content = plain_text.render(render_info)
                    html_content = htmly.render(render_info)

                    # print(text_content)

                    invite.save()

                    if not os.environ.get('DEBUG'):
                        message = Mail(
                            from_email='no-reply@humanlambdas.com',
                            to_emails=email,
                            subject='Human Lambdas workflow invitation',
                            html_content=html_content)
                        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
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
            response_text = "error:"
            for email in invalid_email_list:
                response_text += " {0} is an invalid email.".format(email)
            for email in already_added_email_list:
                response_text += """ {0} is already a part of the organization, and """
                """so does not need to be added again.""".format(
                    email
                )
            return Response({"error": response_text}, status=400)
        if len(invalid_email_list) > 0:
            response_text = "error:"
            for email in invalid_email_list:
                response_text += " {0} is an invalid email.".format(email)
            return Response({"error": response_text}, status=400)
        if len(already_added_email_list) > 0:
            response_text = "error:"
            for email in already_added_email_list:
                response_text += """ {0} is already a part of the organization, and """
                """so does not need to be added again.""".format(
                    email
                )
            return Response({"error": response_text}, status=400)


class InvitationView(APIView):
    permission_classes = (IsAuthenticated,)
    queryset = Invitation.objects.all()

    def get_queryset(self):
        user = self.request.user
        return Organization.objects.filter(user=user)

    def get(self, request, *args, **kwargs):
        invite = Invitation.objects.filter(token=self.kwargs["invite_token"])
        if invite.first() is None:
            return Response(
                {"error": "no invitation with this token exists"}, status=404
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
                {"error": "no invitation with this token exists"}, status=404
            )
        else:
            invitation_org = invite.organization
            if User.objects.filter(email=invite.email).first() is None:
                new_user = User(email=invite.email)
                new_user.save()
                invitation_org.user.add(new_user)
                return Response(status=200)
            else:
                user = User.objects.filter(email=invite.email).first()
                invitation_org.user.add(user)
                return Response(status=200)


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
