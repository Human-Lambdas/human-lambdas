from django.test import TestCase
from user_handler.models import User, Organization

from rest_framework.test import APITestCase
from rest_framework import status

from .models import Workflow, Task


class TestModelWorkflow(TestCase):

    def setUp(self):
        user = User(name="foo", email="foo@bar.com", is_admin=True)
        user.save()
        organization = Organization(name="fooinc")
        organization.save()
        organization.user.add(user)
        workflow = Workflow(name='bajs',
                          description="bajs is good for you",
                          inputs={} ,
                          outputs={},
                          created_by=user,
                          organization=organization)
        workflow.save()
        Task(name="bajs_task", workflow=workflow, input_data={"foo":"bar"}, output_data={}).save()

    def test_workflow_data(self):
        description = "bajs is good for you"
        workflow = Workflow.objects.get(name="bajs")
        self.assertEqual(workflow.description, description)
        self.assertEqual(workflow.inputs, {})

    def test_task_data(self):
        task = Task.objects.get(name="bajs_task")
        workflow = Workflow.objects.get(name="bajs")
        self.assertEqual(task.input_data, {"foo":"bar"})
        self.assertEqual(task.workflow, workflow)


class TestCreateWorkflow(APITestCase):

    def setUp(self):
        registration_data ={
            'email': "foo@bar.com",
            "password": "fooword",
            "organization": "fooInc",
            "is_admin": True,
            "name": "foo"
        }
        _ = self.client.post('/users/register/', registration_data)
        response = self.client.post('/users/token/', {'email': "foo@bar.com", "password": "fooword"})
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_create_workflow(self):
        headers = {
            "Authorization": "Bearer {}".format(self.access_token)
        }
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.access_token)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs":  [{"key": "foo", "name": "foo", "format": {"type": "single-class", "single-class": ["foo1", "bar1"]}}],
        }
        response = self.client.post('/workflow/create/', workflow_data,  headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        self.assertTrue(Workflow.objects.filter(name=workflow_data['name']).exists())

    def test_input_validation_errors(self):
        headers = {
            "Authorization": "Bearer {}".format(self.access_token)
        }
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.access_token)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [],
            "outputs": [],
        }
        response = self.client.post('/workflow/create/', workflow_data,  headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.data)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo"}],
            "outputs": []
        }
        response = self.client.post('/workflow/create/', workflow_data,  headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.data)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": 1, "name": "foo", "format": "text"}],
            "outputs": []
        }
        response = self.client.post('/workflow/create/', workflow_data,  headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.data)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "game"}],
            "outputs": []
        }
        response = self.client.post('/workflow/create/', workflow_data,  headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.data)

    def test_output_validation_errors(self):
        headers = {
            "Authorization": "Bearer {}".format(self.access_token)
        }
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.access_token)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [],
        }
        response = self.client.post('/workflow/create/', workflow_data, headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.data)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs":[{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [{"key": "foo"}]
        }
        response = self.client.post('/workflow/create/', workflow_data, headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.data)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [{"key": 1}]
        }
        response = self.client.post('/workflow/create/', workflow_data, headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.data)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [{"key": "foo", "name": "foo", "format": {}}]
        }
        response = self.client.post('/workflow/create/', workflow_data, headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.data)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [{"key": "foo", "name": "foo", "format": {"type": "random"}}]
        }
        response = self.client.post('/workflow/create/', workflow_data, headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.data)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [{"key": "foo", "name": "foo", "format": {"type": "single-class"}}]
        }
        response = self.client.post('/workflow/create/', workflow_data, headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST, response.data)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [{"key": "foo", "name": "foo", "format": {"type": "binary"}}]
        }
        response = self.client.post('/workflow/create/', workflow_data, headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)

class TestRUDWorkflow(APITestCase):

    def setUp(self):
        registration_data = {
            'email': "foo@bar.com",
            "password": "fooword",
            "organization": "fooInc",
            "is_admin": True,
            "name": "foo"
        }
        _ = self.client.post('/users/register/', registration_data)
        response = self.client.post('/users/token/', {'email': "foo@bar.com", "password": "fooword"})
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_create_workflow(self):
        headers = {
            "Authorization": "Bearer {}".format(self.access_token)
        }
        self.client.credentials(HTTP_AUTHORIZATION='Bearer ' + self.access_token)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [
                {"key": "foo", "name": "foo", "format": {"type": "single-class", "single-class": ["foo1", "bar1"]}}],
        }
        response = self.client.post('/workflow/create/', workflow_data, headers=headers, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        self.assertTrue(Workflow.objects.filter(name=workflow_data['name']).exists())


