import os

import cchardet
from rest_framework.test import APITestCase

from human_lambdas.workflow_handler.utils import unidecode

from . import DATA_PATH


class TestEncodings(APITestCase):
    def setUp(self):
        self.raw_text = []
        self.expected = []
        for efile in os.listdir(os.path.join(DATA_PATH, "encodings")):
            with open(os.path.join(DATA_PATH, "encodings", efile), "rb") as f:
                raw_text = f.read()
                self.raw_text.append(raw_text)
                self.expected.append(
                    raw_text.decode(cchardet.detect(raw_text)["encoding"])
                )

    def test_ecodings(self):
        for raw_text, expected in zip(self.raw_text, self.expected):
            self.assertEqual(unidecode(raw_text), expected)
