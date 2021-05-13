from rest_framework import status
from rest_framework.test import APITestCase

from human_lambdas.user_handler.models import Organization, User


class TestUserRoles(APITestCase):
    def setUp(self):
        self.admin_email = "foo@bar.com"
        user = User(name="foo", email=self.admin_email)
        user.set_password("foopwdbar")
        user.save()
        self.organization_name = "fooinc"
        organization = Organization(name=self.organization_name)
        organization.save()
        organization.add_admin(user)
        self.org_id = organization.pk
        user.current_organization_id = self.org_id
        user.save()
        response = self.client.post(
            "/v1/users/token", {"email": "foo@bar.com", "password": "foopwdbar"}
        )
        self.admin_access_token = response.data["access"]
        self.admin_id = user.pk

        self.worker_email = "worker@bar.com"
        worker = User(
            name="peter", email=self.worker_email, current_organization_id=self.org_id
        )
        worker.set_password("pwdbarbar")
        worker.save()
        organization.user.add(worker)
        response = self.client.post(
            "/v1/users/token", {"email": "worker@bar.com", "password": "pwdbarbar"}
        )
        self.worker_access_token = response.data["access"]
        self.worker_id = worker.pk

    def test_admin_list_user(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        response = self.client.get("/v1/orgs/{0}/users".format(self.org_id))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data), 2)
        self.assertTrue(self.admin_email in [i["email"] for i in response.data])
        self.assertTrue(self.worker_email in [i["email"] for i in response.data])

    def test_worker_list_user(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.worker_access_token)
        response = self.client.get("/v1/orgs/{}/users".format(self.org_id))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data), 2)

    def test_admin_retrieve(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        response = self.client.get(
            "/v1/orgs/{0}/users/{1}".format(self.org_id, self.admin_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(self.admin_email, response.data["email"], response.data)
        response = self.client.get(
            "/v1/orgs/{0}/users/{1}".format(self.org_id, self.worker_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(self.worker_email, response.data["email"], response.data)

    def test_worker_retrieve(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.worker_access_token)
        response = self.client.get(
            "/v1/orgs/{0}/users/{1}".format(self.org_id, self.admin_id)
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND, response.data)
        response = self.client.get(
            "/v1/orgs/{0}/users/{1}".format(self.org_id, self.worker_id)
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND, response.data)

    def test_worker_update(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.worker_access_token)
        data = {"admin": True}
        response = self.client.patch(
            "/v1/orgs/{0}/users/{1}".format(self.org_id, self.worker_id), data
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND, response.data)
        data = {"admin": False}
        response = self.client.patch(
            "/v1/orgs/{0}/users/{1}".format(self.org_id, self.admin_id), data
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND, response.data)

    def test_admin_update(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        data = {"admin": False}
        response = self.client.patch(
            "/v1/orgs/{0}/users/{1}".format(self.org_id, self.admin_id), data
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN, response.data)
        data = {"admin": True}
        response = self.client.patch(
            "/v1/orgs/{0}/users/{1}".format(self.org_id, self.worker_id), data
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(response.data["message"], "Users role was changed to admin")

    def test_admin_delete(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        response = self.client.delete(
            "/v1/orgs/{0}/users/{1}".format(self.org_id, self.worker_id)
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.delete(
            "/v1/orgs/{0}/users/{1}".format(self.org_id, self.admin_id)
        )
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_worker_delete(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.worker_access_token)
        response = self.client.delete(
            "/v1/orgs/{0}/users/{1}".format(self.org_id, self.worker_id)
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        response = self.client.delete(
            "/v1/orgs/{0}/users/{1}".format(self.org_id, self.admin_id)
        )
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
