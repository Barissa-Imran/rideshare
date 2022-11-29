from django.test import TestCase

from django.test import TestCase
import json
from django.contrib.auth import get_user_model
from django.test import Client
from rental.models import Email

User = get_user_model()


class AsapTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_superuser(
            username='test', password='test@4g67', email='test@mail.com')
        return super().setUp()

    def test_user_exists(self):
        user_count = User.objects.all().count()
        print(user_count)
        self.assertEqual(user_count, 1)

    def test_contact_page(self):
        """Test contact page functionality"""
        Email.objects.create(
            name='test', email='test@mail.com', message='this is a test')
        email_count = Email.objects.all().count()
        self.assertEqual(email_count, 1)

    def test_reset_token(self):
        """A reset token is created when email sent"""
        c = Client()
        url = '/api/auth/users/reset_password/'
        body = {"email": "test@mail.com"}
        content_type = 'application/json'
        response = c.post(url, body, content_type)
        self.assertEqual(response.status_code, 200)