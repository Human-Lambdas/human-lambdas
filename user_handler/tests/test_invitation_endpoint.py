import logging
import datetime

from rest_framework.test import APITestCase
from rest_framework import status
from django.utils.timezone import make_aware

from user_handler.models import User, Organization, Invitation

logger = logging.getLogger(__file__)


class TestInvite(APITestCase):
    def setUp(self):
        self.preset_user_name = "foo"
        self.preset_user_email = "foo@bar.com"
        self.preset_changed_email = "bar@foo.com"
        self.organization_name = "fooinc"
        self.preset_user_password = "fooword"

        user = User(name=self.preset_user_name, email=self.preset_user_email)
        user.set_password(self.preset_user_password)
        user.save()
        self.user = user

        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

        organization = Organization(name=self.organization_name)
        organization.save()
        self.organization = organization
        self.org_id = organization.id
        organization.user.add(user)

        self.new_recipient, self.existing_recipient, time = (
            "matteus@humanlambdas.com",
            "lambda@sigma.com",
            str(datetime.datetime.now()),
        )
        self.token = hash(str(self.existing_recipient) + str(self.org_id) + str(time))
        aware_expiry_date = make_aware(datetime.datetime.now() + datetime.timedelta(30))

        new_invite = Invitation(
            email=self.existing_recipient,
            organization=self.organization,
            invited_by=self.user,
            token=self.token,
            expires_at=aware_expiry_date,
        )
        new_invite.save()

    def test_invitation_get_call_no_invite(self):
        # self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/users/invitation/vv3w87nvw3703yvw07vhs7vsnhs0vv4t7ehom"
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_invitation_get_call(self):
        response = self.client.get("/v1/users/invitation/{0}".format(self.token))
        self.assertEqual(response.data["invitation_email"], self.existing_recipient)
        self.assertEqual(response.data["invitation_org"], str(self.organization))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invitation_post_call_new_user(self):
        # self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        recipient = "lambda@sigma.com"
        _ = self.client.post(
            "/v1/users/invite/",
            {
                "emails": "{0},alpha@beta.com,gamma@delta.com".format(recipient),
                "organization_id": self.org_id,
            },
        )
        response = self.client.post(
            "/v1/users/invitation/{0}".format(self.token),
            {"name": "sean", "password": "fooword"},
        )
        self.assertEqual(response.data["message"], "Your account has been created!")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    # def test_invitation_post_call_existing_user(self):
    #     # self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
    #     _ = self.client.post(
    #         "/v1/users/invite/",
    #         {
    #             "emails": "{0},alpha@beta.com,gamma@delta.com".format(self.existing_recipient),
    #             "organization_id": self.org_id,
    #         },
    #     )
    #     new_user = User(name="sean", email=self.existing_recipient)
    #     new_user.set_password("fooword")
    #     new_user.save()
    #     response = self.client.post(
    #         "/v1/users/invitation/{0}".format(hash(str(recipient + str(self.org_id)))),
    #         {"name": "sean", "password": "fooword"},
    #     )
    #     self.assertEqual(response.data["message"], "Success!")
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
