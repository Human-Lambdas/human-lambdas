import logging

from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization, User

logger = logging.getLogger(__name__)


class TestOrganizations(APITestCase):
    def setUp(self):
        self.preset_user_name = "foo"
        self.preset_user_email = "foo@bar.com"
        self.organization_name = "fooinc"
        self.preset_user_password = "foowordbar"

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

    def test_create_organization(self):
        response = self.client.post(
            "/v1/users/token",
            {"email": "foo@bar.com", "password": self.preset_user_password},
        )
        access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        data = {"name": "new_org"}
        response = self.client.post("/v1/orgs/create", data, format="json")
        self.assertEqual(response.data["name"], data["name"])
        org_obj = Organization.objects.get(name=data["name"])
        self.assertTrue(org_obj.admin.filter(email="foo@bar.com").exists())

    def test_delete_organization(self):
        response = self.client.post(
            "/v1/users/token",
            {"email": "foo@bar.com", "password": self.preset_user_password},
        )
        access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        response = self.client.delete("/v1/orgs/%s" % self.org_id)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        user = User.objects.get(email=self.preset_user_email)
        self.assertIsNone(user.current_organization_id)

    def test_get_organization(self):
        response = self.client.post(
            "/v1/users/token",
            {"email": "foo@bar.com", "password": self.preset_user_password},
        )
        access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        response = self.client.get("/v1/orgs/%s" % self.org_id)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], self.organization_name)

    def test_update_organization(self):
        response = self.client.post(
            "/v1/users/token",
            {"email": "foo@bar.com", "password": self.preset_user_password},
        )
        access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        response = self.client.patch(
            "/v1/orgs/%s" % self.org_id, {"name": "new name"}, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], "new name")

    def test_list_organization(self):
        response = self.client.post(
            "/v1/users/token",
            {"email": self.preset_user_email, "password": self.preset_user_password},
        )
        access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        response = self.client.get("/v1/orgs")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]["name"], self.organization_name)
        self.assertIsNotNone(response.data[0].get("id"))

    def test_get_organization_wrong_user(self):
        response = self.client.post(
            "/v1/users/token", {"email": "wrong@bar.com", "password": "wrong_user"}
        )
        access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        response = self.client.get("/v1/orgs/%s" % self.org_id)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_organization_data_deletion(self):
        organization = Organization.objects.all()
        organization.delete()
        self.assertEqual(len(Organization.objects.all()), 0)
