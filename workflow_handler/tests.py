from django.test import TestCase
from user_handler.models import User, Organization

from rest_framework.test import APITestCase
from rest_framework import status

from .models import Workflow, Task


class TestModelWorkflow(TestCase):

    def setUp(self):
        self.preset_description = "bajs is good for you"
        self.preset_changed_description = "bajs is bad for you"
        self.preset_task_name = "bajs_task"
        self.preset_input_data = {"foo":"bar"}
        self.preset_changed_input_data = {"foo":"bar", "alpha":"beta"}
        self.preset_workflow_name = "bajs"
        
        user = User(name="foo", email="foo@bar.com", is_admin=True)
        user.save()
        organization = Organization(name="fooInc")
        organization.save()
        organization.user.add(user)
        workflow = Workflow(name=self.preset_workflow_name,
                          description=self.preset_description,
                          inputs={} ,
                          outputs={},
                          created_by=user,
                          organization=organization)
        workflow.save()
        Task(name=self.preset_task_name, workflow=workflow, input_data=self.preset_input_data, output_data={}).save()

    def test_workflow_data(self):
        workflow = Workflow.objects.get(name=self.preset_workflow_name)
        self.assertEqual(workflow.description, self.preset_description)
        self.assertEqual(workflow.inputs, {})

    def test_task_data(self):
        task = Task.objects.get(name=self.preset_task_name)
        workflow = Workflow.objects.get(name=self.preset_workflow_name)
        self.assertEqual(task.input_data, self.preset_input_data)
        self.assertEqual(task.workflow, workflow)

    def test_workflow_data_changes(self):
        workflow = Workflow.objects.get(name=self.preset_workflow_name)
        workflow.description = self.preset_changed_description
        workflow.save()
        newWorkflow = Workflow.objects.get(name=self.preset_workflow_name)
        self.assertEqual(newWorkflow.description, self.preset_changed_description)

    def test_task_data_changes(self):
        task = Task.objects.get(name=self.preset_task_name)
        task.input_data = self.preset_changed_input_data
        task.save()
        newTask = Task.objects.get(name=self.preset_task_name)
        self.assertEqual(newTask.input_data, self.preset_changed_input_data)

    def test_workflow_data_deletion(self):
        workflow = Workflow.objects.all()
        workflow.delete()
        self.assertEqual(len(Workflow.objects.all()), 0)    

    def test_task_data_deletion(self):
        task = Task.objects.all()
        task.delete()
        self.assertEqual(len(Task.objects.all()), 0)

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