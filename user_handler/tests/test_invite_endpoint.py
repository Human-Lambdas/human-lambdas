
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

        user = User(
            name=self.preset_user_name, email=self.preset_user_email, is_admin=True
        )
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

    def test_endpoint_call(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/users/invite/",
            {
                "emails": "sean@humanlambdas.com,bernat@humanlambdas.com,james@humanlambdas.com",
                "organization": "fooinc"
            },
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_endpoint_call_with_spaces(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/users/invite/",
            {
                "emails": "sean@humanlambdas.com     ,bernat@humanlambdas.com,    james@humanlambdas.com    ",
                "organization": "fooinc"
            },
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_endpoint_call_duplicate_emails(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/users/invite/",
            {
                "emails": "sean@humanlambdas.com,bernat@humanlambdas.com,james@humanlambdas.com,bernat@humanlambdas.com",
                "organization": "fooinc"
            },
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_endpoint_call_no_jwt(self):
        response = self.client.post(
            "/v1/users/invite/",
            {
                "emails": "sean@humanlambdas.com,bernat@humanlambdas.com,james@humanlambdas.com",
                "organization": "fooinc"
            },
        )
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_endpoint_call_already_added_email(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/users/invite/",
            {
                "emails": "sean@humanlambdas.com,foo@bar.com,james@humanlambdas.com",
                "organization": "fooinc"
            },
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_endpoint_call_invalid_emails(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/users/invite/",
            {
                "emails": "sean@humanlambdas.com,bernat@bernat,james.com",
                "organization": "fooinc"
            },
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_endpoint_call_invalid_emails_and_already_added_emails(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.post(
            "/v1/users/invite/",
            {
                "emails": "sean@humanlambdas.com,bernat@bernat,james.com,foo@bar.com",
                "organization": "fooinc"
            },
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)