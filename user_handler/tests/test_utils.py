from ..utils import is_invalid_email
from rest_framework.test import APITestCase
from rest_framework import status

from user_handler.models import User, Organization


class TestUserRoles(APITestCase):

    def test_is_email_valid(self):
        self.assertTrue(is_invalid_email("test@test"))
        self.assertFalse(is_invalid_email("valid@valid.com"))
        
