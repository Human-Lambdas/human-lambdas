import logging

from rest_framework.test import APITestCase
from rest_framework import status

from user_handler.models import User, Organization

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

        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

        organization = Organization(name=self.organization_name)
        organization.save()
        self.org_id = organization.id
        organization.user.add(user)

    def test_invitation_get_call_no_invite(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get(
            "/v1/users/invitation/vv3w87nvw3703yvw07vhs7vsnhs0vv4t7ehom"
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_invitation_get_call(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        org, recipient = "fooinc", "matteus@humanlambdas.com"
        _ = self.client.post(
            "/v1/users/invite/",
            {
                "emails": "{0},alpha@beta.com,gamma@delta.com".format(recipient),
                "organization_id": self.org_id,
            },
        )
        response = self.client.get(
            "/v1/users/invitation/{0}".format(
                hash(str("matteus@humanlambdas.com" + str(self.org_id)))
            )
        )
        self.assertEqual(response.data["invitation_email"], recipient)
        self.assertEqual(response.data["invitation_org"], org)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invitation_get_call_no_jwt(self):
        response = self.client.get(
            "/v1/users/invitation/vv3w87nvw3703yvw07vhs7vsnhs0vv4t7ehom"
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_invitation_post_call_new_user(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        recipient = "lambda@signma.com"
        _ = self.client.post(
            "/v1/users/invite/",
            {
                "emails": "{0},alpha@beta.com,gamma@delta.com".format(recipient),
                "organization_id": self.org_id,
            },
        )
        response = self.client.post(
            "/v1/users/invitation/{0}".format(hash(str(recipient + str(self.org_id)))),
            {"name": "sean", "password": "fooword"},
        )
        self.assertEqual(response.data["message"], "Your account has been created!")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invitation_post_call_existing_user(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        recipient = "lambda@signma.com"
        _ = self.client.post(
            "/v1/users/invite/",
            {
                "emails": "{0},alpha@beta.com,gamma@delta.com".format(recipient),
                "organization_id": self.org_id,
            },
        )
        new_user = User(name="sean", email=recipient)
        new_user.set_password("fooword")
        new_user.save()
        response = self.client.post(
            "/v1/users/invitation/{0}".format(hash(str(recipient + str(self.org_id)))),
            {"name": "sean", "password": "fooword"},
        )
        self.assertEqual(response.data["message"], "Success!")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_invitation_post_call_no_jwt(self):
        response = self.client.post(
            "/v1/users/invitation/vv3w87nvw3703yvw07vhs7vsnhs0vv4t7ehom"
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
