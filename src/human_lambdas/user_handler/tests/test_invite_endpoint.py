import logging

from django.test.utils import override_settings
from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization, User

logger = logging.getLogger(__name__)
logging.disable(logging.DEBUG)


class TestInvite(APITestCase):
    def setUp(self):
        self.preset_user_name = "foo"
        self.preset_user_email = "foo@bar.com"
        self.preset_changed_email = "bar@foo.com"
        self.organization_name = "barinc"
        self.preset_user_password = "foowordbar"

        user = User(name=self.preset_user_name, email=self.preset_user_email)
        user.set_password(self.preset_user_password)
        user.save()

        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foowordbar"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

        organization = Organization(name=self.organization_name)
        organization.save()
        self.org_id = organization.id
        organization.add_admin(user)

    @override_settings(DEBUG=True)
    def test_endpoint_call(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/orgs/{0}/invite".format(self.org_id),
            {"emails": "seanfahy45@gmail.com,alpha@beta.com,gamma@delta.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    @override_settings(DEBUG=True)
    def test_endpoint_call_with_spaces(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/orgs/{0}/invite".format(self.org_id),
            {"emails": "lambda@sigma.com     ,alpha@beta.com,    gamma@delta.com    "},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    @override_settings(DEBUG=True)
    def test_endpoint_call_duplicate_emails(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/orgs/{0}/invite".format(self.org_id),
            {
                "emails": "lambda@sigma.com,alpha@beta.com,gamma@delta.com,alpha@beta.com",
            },
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    @override_settings(DEBUG=True)
    def test_endpoint_call_no_jwt(self):
        response = self.client.post(
            "/v1/orgs/{0}/invite".format(self.org_id),
            {"emails": "lambda@sigma.com,alpha@beta.com,gamma@delta.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    @override_settings(DEBUG=True)
    def test_endpoint_call_already_added_email(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/orgs/{0}/invite".format(self.org_id),
            {"emails": "lambda@sigma.com,foo@bar.com,gamma@delta.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    @override_settings(DEBUG=True)
    def test_endpoint_call_invalid_emails(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/orgs/{0}/invite".format(self.org_id),
            {"emails": "lambda@sigma.com,foo@foo,bar.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    @override_settings(DEBUG=True)
    def test_endpoint_call_invalid_emails_and_already_added_emails(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/orgs/{0}/invite".format(self.org_id),
            {"emails": "lambda@sigma.com,foo@foo,bar.com,foo@bar.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    @override_settings(DEBUG=True)
    def test_endpoint_call_email_with_underscore(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/orgs/{0}/invite".format(self.org_id),
            {"emails": "lam__bda@sigma.com,foo@foobarinc.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_endpoint_call_get(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/orgs/{0}/invite".format(self.org_id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_endpoint_call_delete(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/orgs/{0}/invite".format(self.org_id),
            {"emails": "delete@me.com"},
        )
        response = self.client.delete(
            "/v1/orgs/{0}/invite".format(self.org_id), {"email": "delete@me.com"}
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_endpoint_call_patch(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/orgs/{0}/invite".format(self.org_id),
            {"emails": "patch@me.com"},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.patch(
            "/v1/orgs/{0}/invite".format(self.org_id),
            {"email": "patch@me.com", "admin": True},
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.get("/v1/orgs/{0}/invite".format(self.org_id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_endpoint_call_delete_no_invite(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.delete(
            "/v1/orgs/{0}/invite".format(self.org_id), {"email": "delete@me.com"}
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
