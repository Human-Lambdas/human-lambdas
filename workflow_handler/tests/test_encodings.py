import os

from rest_framework.test import APITestCase
from workflow_handler.utils import unidecode

from . import DATA_PATH


class TestEncodings(APITestCase):
    def setUp(self):
        self.raw_text = []
        self.expected = [
            'premi?re is first\npremie?re is slightly different\n????????? is Cyrillic\n? am Deseret\n',
            'première is first\npremière is slightly different\nКириллица is Cyrillic\n𐐀 am Deseret\n',
            'premi\x8are is first\npremie?re is slightly different\n????????? is Cyrillic\n? am Deseret\n',
            'première is first\npremie?re is slightly different\n????????? is Cyrillic\n? am Deseret\n',
            'premi?re is first\npremie?re is slightly different\nëÉÒÉÌÌÉÃÁ is Cyrillic\n? am Deseret\n',
            'première is first\npremière is slightly different\nКириллица is Cyrillic\n𐐀 am Deseret\n'
        ]
        for efile in os.listdir(os.path.join(DATA_PATH, "encodings")):
            with open(os.path.join(DATA_PATH, "encodings", efile), "rb") as f:
                raw_text = f.read()
                self.raw_text.append(raw_text)

    def test_ecodings(self):
        for raw_text, expected in zip(self.raw_text, self.expected):
            self.assertEqual(unidecode(raw_text), expected)


