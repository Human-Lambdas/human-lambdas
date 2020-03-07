import logging

from rest_framework.test import APITestCase
from rest_framework import status

from user_handler.models import User, Organization

logger = logging.getLogger(__file__)


class TestOrganizations(APITestCase):
    def setUp(self):
        self.preset_user_name = "foo"
        self.preset_user_email = "foo@bar.com"
        self.organization_name = "fooinc"
        self.preset_user_password = "fooword"

        user = User(name=self.preset_user_name, email=self.preset_user_email)
        user.set_password(self.preset_user_password)
        user.save()
        organization = Organization(name=self.organization_name)
        organization.save()
        self.org_id = organization.id
        organization.add_admin(user)
        user = User(name="wrong_username", email="wrong@bar.com")
        user.set_password("wrong_user")
        user.save()

    def test_get_organization(self):
        response = self.client.post(
            "/v1/users/token/",
            {"email": "foo@bar.com", "password": self.preset_user_password},
        )
        access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        response = self.client.get("/v1/orgs/%s/" % self.org_id)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], self.organization_name)

    def test_list_organization(self):
        response = self.client.post(
            "/v1/users/token/",
            {"email": self.preset_user_email, "password": self.preset_user_password},
        )
        access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        response = self.client.get("/v1/orgs/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["name"], self.organization_name)
        self.assertIsNotNone(response.data[0].get("id"))

    def test_get_organization_wrong_user(self):
        response = self.client.post(
            "/v1/users/token/", {"email": "wrong@bar.com", "password": "wrong_user"}
        )
        access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        response = self.client.get("/v1/orgs/%s/" % self.org_id)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_organization_data_deletion(self):
        organization = Organization.objects.all()
        organization.delete()
        self.assertEqual(len(Organization.objects.all()), 0)
