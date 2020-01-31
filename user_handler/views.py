import logging, re, csv
from io import StringIO

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

from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags

from .models import User, Organization
from .serializers import UserSerializer, OrganizationSerializer

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


class SendInviteView(APIView):
    permission_classes = (IsAuthenticated,)

    def post(self, request):
        stripped_email_list = StringIO("".join(request.data["emails"].split()))
        reader = csv.reader(stripped_email_list, delimiter=',')
        email_set = set(next(reader))
        # convert to set to ignore any duplicated emails

        invite_org = Organization.objects.filter(name=request.data["organization"], user=request.user)
        if invite_org is None:
            # ensure user is inviting to an organization they belong to
            return Response({"message": "You are not a member of this organization"}, status=401)

        invalid_email_list = []
        already_added_email_list = []

        for email in email_set:
            if bool(re.fullmatch(r"\"?([-a-zA-Z0-9.`?{}]+@\w+\.\w+)\"?", email)):
                # checks the email is valid
                userObj = User.objects.filter(email=email)
                organization = Organization.objects.filter(name=request.data["organization"], user=userObj.first())
                if organization.first() is None:
                    subject = 'Subject'
                    html_message = render_to_string('mail_template.html', {'context': 'values'})
                    plain_message = strip_tags(html_message)
                    from_email = 'From <from@example.com>'
                    to = email
                    send_mail(subject, plain_message, from_email, [to], html_message=html_message)
                    # send email
                    print("")
                else:
                    already_added_email_list.append(email)
            else:
                invalid_email_list.append(email)

        # sending responses
        if len(invalid_email_list) == 0 and len(already_added_email_list) == 0:
            return Response({"message": "all emails were successfully added!"}, status=200)
        if len(invalid_email_list) > 0 and len(already_added_email_list) > 0:
            response_text = "error:"
            for email in invalid_email_list:
                response_text += " {0} is an invalid email.".format(email)
            for email in already_added_email_list:
                response_text += " {0} is already a part of the organization, and so does not need to be added again.".format(email)
            return Response({"message": response_text}, status=400)
        if len(invalid_email_list) > 0:
            response_text = "error:"
            for email in invalid_email_list:
                response_text += " {0} is an invalid email.".format(email)
            return Response({"message": response_text}, status=400)
        if len(already_added_email_list) > 0:
            response_text = "error:"
            for email in already_added_email_list:
                response_text += " {0} is already a part of the organization, and so does not need to be added again.".format(email)
            return Response({"message": response_text}, status=400)
        return Response(status=500)

