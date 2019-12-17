import logging

from django.test import TestCase
from rest_framework.test import APITestCase
from rest_framework import status

from .models import User, Organization

logger = logging.getLogger(__file__)


class TestUsers(APITestCase):
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
        organization = Organization(name=self.organization_name)
        organization.save()
        self.org_id = organization.id
        organization.user.add(user)

    def test_user_data(self):
        user = User.objects.get(name=self.preset_user_name)
        self.assertEquals(user.email, self.preset_user_email)

    def test_organization_data(self):
        user = User.objects.get(name=self.preset_user_name)
        organization = Organization.objects.get(name=self.organization_name)
        self.assertEquals(organization.user.all()[0], user)

    def test_user_data_changes(self):
        user = User.objects.get(name=self.preset_user_name)
        user.email = self.preset_changed_email
        user.save()
        new_user = User.objects.get(name=self.preset_user_name)
        self.assertEqual(new_user.email, self.preset_changed_email)

    def test_user_data_deletion(self):
        user = User.objects.all()
        user.delete()
        self.assertEqual(len(User.objects.all()), 0)

    def test_get_organization(self):
        response = self.client.post(
            "/users/token/", {"email": "foo@bar.com", "password": self.preset_user_password}
        )
        access_token = response.data["access"]
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + access_token)
        response = self.client.get("/users/organization/%s" % self.org_id)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["name"], self.organization_name)

    def test_organization_data_deletion(self):
        organization = Organization.objects.all()
        organization.delete()
        self.assertEqual(len(Organization.objects.all()), 0)


class TestAPIjwt(APITestCase):
    def setUp(self):
        user = User(name="foo", email="foo@bar.com", is_admin=True)
        user.set_password("fooword")
        user.save()
        response = self.client.post(
            "/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_token(self):
        response = self.client.post(
            "/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response)

    def test_authorization(self):
        headers = {"Authorization": "Bearer {}".format(self.access_token)}
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/users/hello/", headers=headers)
        self.assertEqual(response.status_code, status.HTTP_200_OK, response)


class TestAPIRegistration(APITestCase):
    def test_registration(self):
        response = self.client.post(
            "/users/register/",
            {
                "email": "foo@bar.com",
                "password": "fooword",
                "name": "foo",
                "is_admin": True,
                "organization": "barinc",
            },
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

class TestAPIChange(APITestCase):
    def setUp(self):
        self.preset_password = "fooword"
        self.preset_changed_password = "barword"
        user = User(name="foo", email="foo@bar.com", is_admin=True)
        user.set_password(self.preset_password)
        user.save()
        response = self.client.post(
            "/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_retrieve(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/users/update/1")
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

    def test_update(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        data = {"password": self.preset_changed_password}
        response = self.client.patch("/users/update/1", data)
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

class TestErrorPayloadStructure(APITestCase):
    def setUp(self):
        self.invalid_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        self.invalid_registration_data = {
            "email": "bar@foo.com",
            "organization": "barInc",
            "is_admin": True,
            "name": "bar",
        }

    # test 404
    def test_404(self):
        response = self.client.post("/users/404")
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    # test hello world
    def test_hello_world(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.invalid_token)
        response = self.client.get("/users/hello/")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    # Register user endpoint tests
    def test_register_user_invalid_data(self):
        response = self.client.post(
            "/users/register/",
            self.invalid_registration_data,
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)

    def test_user_update_no_jwt(self):
        response = self.client.get("/users/update/1")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_user_update_invalid_jwt(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.invalid_token)
        response = self.client.get("/users/update/1")
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
