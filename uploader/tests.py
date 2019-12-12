import logging

from rest_framework.test import APITestCase
from rest_framework import status
from user_handler.models import User

from django.core.files import File


from .models import Upload

logger = logging.getLogger(__file__)


class TestUpload(APITestCase):
    def setUp(self):
        self.file_path = "/home/matteus/hlambda/hl-rest-api/requirements.txt"
        user = User(name="foo", email="foo@bar.com", is_admin=True)
        user.set_password("fooword")
        user.save()
        response = self.client.post(
            "/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_upload(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        with open(self.file_path, 'rb') as f:
            data = {"file": File(f), "filename": self.file_path}
            header = {"Transfer-Encoding": "chunked"}
            total = data["file"].size
            start = 0
            end = total - 1
            header["HTTP_CONTENT_RANGE"] = "bytes {0}-{1}/{2}".format(start, end, total)
            response = self.client.put("/upload/",  data=data, format='multipart', HTTP_CONTENT_RANGE=header["HTTP_CONTENT_RANGE"])
            self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
