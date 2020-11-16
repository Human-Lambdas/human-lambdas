from rest_framework.test import APITestCase

from hl_rest_api.utils import generate_unique_token, is_invalid_email


class TestUtils(APITestCase):
    def test_is_email_valid(self):
        self.assertTrue(is_invalid_email("test@test"))
        self.assertTrue(is_invalid_email("testgmail.com"))
        self.assertTrue(is_invalid_email("test@gmail,me"))
        self.assertFalse(is_invalid_email("with+plus@gmail.com"))
        self.assertTrue(is_invalid_email("A@b@c@example.com"))
        self.assertFalse(is_invalid_email("mailhost!username@example.org"))
        self.assertFalse(is_invalid_email("_somename@example.com"))
        self.assertFalse(is_invalid_email("$A12345@example.com"))
        self.assertFalse(is_invalid_email('""Fred Bloggs"@example.com'))
        self.assertFalse(is_invalid_email("user.nametagsorting@example.com"))
        self.assertFalse(is_invalid_email("valid@valid.com"))

    def test_generate_unique_token(self):
        self.assertNotEqual(
            generate_unique_token("one", "two", "three"),
            generate_unique_token("one", "two", "three"),
        )
