import logging

from rest_framework.test import APITestCase
from rest_framework import status

from user_handler.models import User, Organization

logger = logging.getLogger(__file__)


class TestUsers(APITestCase):
    def setUp(self):
        self.preset_user_name = "foo"
        self.preset_user_email = "foo@bar.com"
        self.preset_changed_email = "bar@foo.com"
        self.organization_name = "fooinc"
        self.preset_user_password = "fooword"

        user = User(name=self.preset_user_name, email=self.preset_user_email)
        user.set_password(self.preset_user_password)
        user.save()
        organization = Organization(name=self.organization_name)
        organization.save()
        self.org_id = organization.id
        organization.add_admin(user)

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


class TestAPIRegistration(APITestCase):
    def test_registration(self):
        response = self.client.post(
            "/v1/users/register/",
            {
                "email": "foo@bar.com",
                "password": "fooword",
                "name": "foo",
                "is_admin": True,
                "organization": "barinc",
            },
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class TestAPIUserCRUD(APITestCase):
    def setUp(self):
        response = self.client.post(
            "/v1/users/register/",
            {
                "email": "foo@bar.com",
                "password": "fooword",
                "name": "foo",
                "is_admin": True,
                "organization": "barinc",
            },
        )
        self.user_id = response.data["id"]
        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]

    def test_retrieve_user(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/users/{}/".format(self.user_id))
        self.assertTrue(response.data["is_admin"])


class TestAPIjwt(APITestCase):
    def setUp(self):
        user = User(name="foo", email="foo@bar.com")
        user.set_password("fooword")
        user.save()
        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_token(self):
        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response)

    def test_authorization(self):
        headers = {"Authorization": "Bearer {}".format(self.access_token)}
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/users/hello/", headers=headers)
        self.assertEqual(response.status_code, status.HTTP_200_OK, response)

    def test_trailing_slash(self):
        headers = {"Authorization": "Bearer {}".format(self.access_token)}
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/users/hello", headers=headers)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND, response)


class TestAPIUserUpdate(APITestCase):
    def setUp(self):
        self.preset_password = "fooword"
        self.preset_changed_password = "barword"
        user = User(name="foo", email="foo@bar.com")
        user.set_password(self.preset_password)
        user.save()
        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.user_id = user.pk
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_retrieve(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/users/{}/".format(self.user_id))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

    def test_update_password(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        data = {"password": self.preset_changed_password}
        response = self.client.patch("/v1/users/{}/".format(self.user_id), data)
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.assertEqual(response.status_code, 401)
        response = self.client.post(
            "/v1/users/token/",
            {"email": "foo@bar.com", "password": self.preset_changed_password},
        )
        self.assertEqual(response.status_code, 200)

    def test_update_name(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        new_name = "baaaard"
        data = {"name": new_name}
        response = self.client.patch("/v1/users/{}/".format(self.user_id), data)
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(response.data["name"], new_name, response.data)
        user = User.objects.get(pk=self.user_id)
        self.assertEqual(user.name, new_name)

    def test_update_email(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        new_email = "baaard@foo.com"
        data = {"email": new_email}
        response = self.client.patch("/v1/users/{}/".format(self.user_id), data)
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(response.data["email"], new_email, response.data)
        user = User.objects.get(pk=self.user_id)
        self.assertEqual(user.email, new_email)


class TestListUsers(APITestCase):
    def setUp(self):
        self.user_name = "foo"
        user = User(name=self.user_name, email="foo@bar.com")
        user.set_password("foopwd")
        user.save()
        self.organization_name = "fooinc"
        organization = Organization(name=self.organization_name)
        organization.save()
        organization.add_admin(user)
        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "foopwd"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

        self.worker1_name = "peter"
        self.worker2_name = "paul"
        worker1 = User(name=self.worker1_name, email="worker1@bar.com")
        worker1.set_password("pwd")
        worker1.save()
        organization.user.add(worker1)
        self.org_id1 = organization.pk

        worker2 = User(name=self.worker1_name, email="worker2@bar.com")
        worker2.set_password("pwd")
        worker2.save()
        organization_other = Organization(name="otherorg")
        organization_other.save()
        organization_other.user.add(worker2)
        self.org_id2 = organization.pk

    def test_list_user1(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        response = self.client.get("/v1/orgs/{}/users/".format(self.org_id1))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data), 2)
        self.assertTrue(self.user_name in [i["name"] for i in response.data])
        self.assertTrue(self.worker1_name in [i["name"] for i in response.data])
        self.assertTrue(self.worker2_name not in [i["name"] for i in response.data])
