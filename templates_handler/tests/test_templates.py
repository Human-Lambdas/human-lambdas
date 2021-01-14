import logging
import pathlib
from unittest.mock import patch

from rest_framework.test import APITestCase

logger = logging.getLogger(__file__)


class TestTemplates(APITestCase):
    def test_when_get_then_response(self):
        ret_value = pathlib.Path("testtemplates.json").read_text()
        with patch("pathlib.Path.read_text") as read_text:
            read_text.return_value = ret_value
            response = self.client.get(
                "/v1/templates",
            )

        assert response.status_code == 200
        assert len(response.data) == 4
