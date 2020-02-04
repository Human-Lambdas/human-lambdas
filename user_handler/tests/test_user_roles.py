from rest_framework.test import APITestCase
from rest_framework import status

from user_handler.models import User, Organization


class TestUserRoles(APITestCase):
    def setUp(self):
        self.admin_email = "foo@bar.com"
        user = User(name="foo", email=self.admin_email, is_admin=True)
        user.set_password("foopwd")
        user.save()
        self.organization_name = "fooinc"
        organization = Organization(name=self.organization_name)
        organization.save()
        organization.user.add(user)
        response = self.client.post(
            "/v1/users/token/", {"email": "foo@bar.com", "password": "foopwd"}
        )
        self.admin_access_token = response.data["access"]
        self.admin_id = user.pk

        self.worker_email = "worker@bar.com"
        worker = User(name="peter", email=self.worker_email, is_admin=False)
        worker.set_password("pwd")
        worker.save()
        organization.user.add(worker)
        response = self.client.post(
            "/v1/users/token/", {"email": "worker@bar.com", "password": "pwd"}
        )
        self.worker_access_token = response.data["access"]
        self.worker_id = worker.pk

    def test_admin_list_user(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        response = self.client.get("/v1/users/")
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data), 2)
        self.assertTrue(self.admin_email in [i["email"] for i in response.data])
        self.assertTrue(self.worker_email in [i["email"] for i in response.data])

    def test_worker_list_user(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.worker_access_token)
        response = self.client.get("/v1/users/")
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(len(response.data), 1)
        self.assertTrue(self.admin_email not in [i["email"] for i in response.data])
        self.assertTrue(self.worker_email in [i["email"] for i in response.data])

    def test_admin_retrieve(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        response = self.client.get("/v1/users/{}".format(self.admin_id))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(self.admin_email, response.data["email"], response.data)
        response = self.client.get("/v1/users/{}".format(self.worker_id))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(self.worker_email, response.data["email"], response.data)

    def test_worker_retrieve(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.worker_access_token)
        response = self.client.get("/v1/users/{}".format(self.admin_id))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND, response.data)
        response = self.client.get("/v1/users/{}".format(self.worker_id))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(self.worker_email, response.data["email"], response.data)

    def test_worker_update(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.worker_access_token)
        data = {"is_admin": True}
        response = self.client.patch("/v1/users/{}".format(self.worker_id), data)
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertFalse(response.data["is_admin"])
        data = {"is_admin": False}
        response = self.client.patch("/v1/users/{}".format(self.admin_id), data)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND, response.data)

    def test_admin_update(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        data = {"is_admin": False}
        response = self.client.patch("/v1/users/{}".format(self.admin_id), data)
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertTrue(response.data["is_admin"])
        data = {"is_admin": True}
        response = self.client.patch("/v1/users/{}".format(self.worker_id), data)
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertTrue(response.data["is_admin"])

    def test_admin_delete(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.admin_access_token)
        response = self.client.delete("/v1/users/{}".format(self.worker_id))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        response = self.client.delete("/v1/users/{}".format(self.admin_id))
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

    def test_worker_delete(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.worker_access_token)
        response = self.client.delete("/v1/users/{}".format(self.worker_id))
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
        response = self.client.delete("/v1/users/{}".format(self.admin_id))
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)
