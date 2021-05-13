import logging
import pathlib
from unittest.mock import patch

from rest_framework.test import APITestCase

logger = logging.getLogger(__name__)


class TestTemplates(APITestCase):
    def test_when_get_then_response(self):
        ret_value = pathlib.Path(
            "src/human_lambdas/templates_handler/tests/t.json"
        ).read_text()
        with patch("pathlib.Path.read_text") as read_text:
            read_text.return_value = ret_value
            response = self.client.get(
                "/v1/templates",
            )

        assert response.status_code == 200
        assert len(response.data) == 4
        for tt in response.data:
            assert "id" in tt
            assert "name" in tt
            assert "summary" in tt
            assert "thumbnail" in tt

    def test_when_invalid_json_then_empty_response(self):
        with patch("pathlib.Path.read_text") as read_text:
            read_text.return_value = "blah"
            response = self.client.get(
                "/v1/templates",
            )

        assert response.status_code == 200
        assert len(response.data) == 0

    def test_when_missing_templates_then_empty_response(self):
        with patch("pathlib.Path.read_text") as read_text:
            read_text.side_effect = FileNotFoundError
            response = self.client.get(
                "/v1/templates",
            )

        assert response.status_code == 200
        assert len(response.data) == 0
