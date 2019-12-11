import logging

from rest_framework.test import APITestCase
from rest_framework import status
from user_handler.models import User

from .models import Upload

logger = logging.getLogger(__file__)


class TestUpload(APITestCase):
    def setUp(self):
        self.file_path = "/home/matteus/hlambda/hl-rest-api/requirements.txt"
    #     user = User(name="foo", email="foo@bar.com", is_admin=True)
    #     user.set_password("fooword")
    #     user.save()
    #     response = self.client.post(
    #         "/users/token/", {"email": "foo@bar.com", "password": "fooword"}
    #     )
    #     self.access_token = response.data["access"]
    #     self.refresh = response.data["refresh"]

    def test_upload(self):
        # self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        with open(self.file_path, 'rb') as f:
            data = {"file": self.file_path}
            header = {"Transfer-Encoding": "chunked"}
            response = self.client.post("/upload/",  data=data, file=f, format='multipart', header=header)
            self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
