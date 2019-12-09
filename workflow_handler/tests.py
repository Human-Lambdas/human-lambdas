from django.test import TestCase
from user_handler.models import User, Organization


from rest_framework.test import APITestCase
from rest_framework import status

from .models import Workflow, Task

from .parser import validate_keys, format_csv, create_tasks

from io import StringIO

import csv

class TestModelWorkflow(TestCase):
    def setUp(self):
        self.preset_description = "bajs is good for you"
        self.preset_changed_description = "bajs is bad for you"
        self.preset_task_name = "bajs_task"
        self.preset_input_data = {"foo": "bar"}
        self.preset_changed_input_data = {"foo": "bar", "alpha": "beta"}
        self.preset_workflow_name = "bajs"

        user = User(name="foo", email="foo@bar.com", is_admin=True)
        user.save()
        organization = Organization(name="fooInc")
        organization.save()
        organization.user.add(user)
        workflow = Workflow(
            name=self.preset_workflow_name,
            description=self.preset_description,
            inputs={},
            outputs={},
            created_by=user,
            organization=organization,
        )
        workflow.save()
        Task(
            name=self.preset_task_name,
            workflow=workflow,
            input_data=self.preset_input_data,
            output_data={},
        ).save()

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
        new_workflow = Workflow.objects.get(name=self.preset_workflow_name)
        self.assertEqual(new_workflow.description, self.preset_changed_description)

    def test_task_data_changes(self):
        task = Task.objects.get(name=self.preset_task_name)
        task.input_data = self.preset_changed_input_data
        task.save()
        new_task = Task.objects.get(name=self.preset_task_name)
        self.assertEqual(new_task.input_data, self.preset_changed_input_data)

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
        registration_data = {
            "email": "foo@bar.com",
            "password": "fooword",
            "organization": "fooInc",
            "is_admin": True,
            "name": "foo",
        }
        _ = self.client.post("/users/register/", registration_data)
        response = self.client.post(
            "/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_create_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [
                {
                    "key": "foo",
                    "name": "foo",
                    "format": {
                        "type": "single-class",
                        "single-class": ["foo1", "bar1"],
                    },
                }
            ],
        }
        response = self.client.post("/workflow/create/", workflow_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        self.assertTrue(Workflow.objects.filter(name=workflow_data["name"]).exists())

    def test_input_validation_errors(self):
        headers = {"Authorization": "Bearer {}".format(self.access_token)}
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [],
            "outputs": [],
        }
        response = self.client.post(
            "/workflow/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo"}],
            "outputs": [],
        }
        response = self.client.post(
            "/workflow/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": 1, "name": "foo", "format": "text"}],
            "outputs": [],
        }
        response = self.client.post(
            "/workflow/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "game"}],
            "outputs": [],
        }
        response = self.client.post(
            "/workflow/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

    def test_output_validation_errors(self):
        headers = {"Authorization": "Bearer {}".format(self.access_token)}
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [],
        }
        response = self.client.post(
            "/workflow/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [{"key": "foo"}],
        }
        response = self.client.post(
            "/workflow/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [{"key": 1}],
        }
        response = self.client.post(
            "/workflow/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [{"key": "foo", "name": "foo", "format": {}}],
        }
        response = self.client.post(
            "/workflow/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [{"key": "foo", "name": "foo", "format": {"type": "random"}}],
        }
        response = self.client.post(
            "/workflow/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [
                {"key": "foo", "name": "foo", "format": {"type": "single-class"}}
            ],
        }
        response = self.client.post(
            "/workflow/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(
            response.status_code, status.HTTP_400_BAD_REQUEST, response.data
        )

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [{"key": "foo", "name": "foo", "format": {"type": "binary"}}],
        }
        response = self.client.post(
            "/workflow/create/", workflow_data, headers=headers, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)


class TestCRUDWorkflow(APITestCase):
    def setUp(self):
        registration_data = {
            "email": "foo@bar.com",
            "password": "fooword",
            "organization": "fooInc",
            "is_admin": True,
            "name": "foo",
        }
        _ = self.client.post("/users/register/", registration_data)
        response = self.client.post(
            "/users/token/", {"email": "foo@bar.com", "password": "fooword"}
        )
        self.access_token = response.data["access"]
        self.refresh = response.data["refresh"]

    def test_create_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)

        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [
                {
                    "key": "foo",
                    "name": "foo",
                    "format": {
                        "type": "single-class",
                        "single-class": ["foo1", "bar1"],
                    },
                }
            ],
        }
        response = self.client.post("/workflow/create/", workflow_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        self.assertTrue(Workflow.objects.filter(name=workflow_data["name"]).exists())

    def test_retrieve_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [
                {
                    "key": "foo",
                    "name": "foo",
                    "format": {
                        "type": "single-class",
                        "single-class": ["foo1", "bar1"],
                    },
                }
            ],
        }
        response = self.client.post("/workflow/create/", workflow_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_obj = Workflow.objects.filter(name=workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        response = self.client.get("/workflow/update/{}".format(workflow.pk))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

    def test_update_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [
                {
                    "key": "foo",
                    "name": "foo",
                    "format": {
                        "type": "single-class",
                        "single-class": ["foo1", "bar1"],
                    },
                }
            ],
        }
        response = self.client.post("/workflow/create/", workflow_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_obj = Workflow.objects.filter(name=workflow_data["name"])
        self.assertTrue(workflow_obj.exists())
        workflow = workflow_obj.first()
        workflow_data = {
            "description": "not so great wf",
        }
        response = self.client.patch(
            "/workflow/update/{}".format(workflow.pk), workflow_data, format="json"
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)

    def test_list_workflow(self):
        self.client.credentials(HTTP_AUTHORIZATION="Bearer " + self.access_token)
        workflow_data1 = {
            "name": "foowf",
            "description": "great wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [
                {
                    "key": "foo",
                    "name": "foo",
                    "format": {
                        "type": "single-class",
                        "single-class": ["foo1", "bar1"],
                    },
                }
            ],
        }
        response = self.client.post("/workflow/create/", workflow_data1, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        workflow_data2 = {
            "name": "foowf2",
            "description": "greater wf",
            "inputs": [{"key": "foo", "name": "foo", "format": "text"}],
            "outputs": [
                {
                    "key": "foo",
                    "name": "foo",
                    "format": {
                        "type": "single-class",
                        "single-class": ["foo1", "bar1"],
                    },
                }
            ],
        }
        response = self.client.post("/workflow/create/", workflow_data2, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED, response.data)
        response = self.client.get("/workflow/list/")
        result_1 = response.data[0]
        result_2 = response.data[1]
        self.assertTrue(result_1.pop("id"))
        self.assertTrue(result_2.pop("id"))
        self.assertEqual(response.status_code, status.HTTP_200_OK, response.data)
        self.assertEqual(workflow_data2, response.data[0], response.data)
        self.assertEqual(workflow_data1, response.data[1], response.data)

class TestParserWorkflow(TestCase):
    def setUp(self):
        self.test_csv_string = """alpha,beta,gamma,delta
        1,2,3,4
        5,6,7,8"""

        self.test_csv_string_missing_columns = """alpha,beta,delta
        1,2,4
        5,6,8"""
        
        self.test_csv_string_extra_columns = """alpha,beta,gamma,delta,lambda
        1,2,3,4,5
        6,7,8,9,10"""
        
        self.test_csv_string_duplicate_columns = """alpha,beta,gamma,delta,alpha
        1,2,3,4,1
        5,6,7,8,5"""
        
        self.test_csv_file = StringIO(self.test_csv_string)
        self.test_csv_file_missing_columns = StringIO(self.test_csv_string_missing_columns)
        self.test_csv_file_extra_columns = StringIO(self.test_csv_string_extra_columns)
        self.test_csv_file_duplicate_columns = StringIO(self.test_csv_string_duplicate_columns)

        self.sample_user = User(name="John Doe", email="John@Doe.com")
        self.sample_user.save()

        self.sample_organization = Organization(name="ACMEcorp")
        self.sample_organization.save()

        self.sample_workflow = Workflow(name="<str>", description="<str>", inputs=
            [
                    {
                        "key": "alpha", 
                        "name": "<str>", 
                        "format": "<data-type>",
                    },
                                {
                        "key": "beta", 
                        "name": "<str>", 
                        "format": "<data-type>",
                    },
                                {
                        "key": "gamma", 
                        "name": "<str>", 
                        "format": "<data-type>",
                    },
                                {
                        "key": "delta", 
                        "name": "<str>", 
                        "format": "<data-type>",
                    },  
            ],
            outputs=[
                    {
                        "key": "<str>", 
                        "name": "<str>", 
                        "format": {"type": "<output-type>", "<output-type>": "[<str>, ...]"},  
                    }
            ],
            created_by=self.sample_user,
            organization=self.sample_organization)

        self.sample_workflow.save()

        self.title_row = ["alpha", "beta", "gamma", "delta"]

    def test_validate_keys_missing_columns(self):
        try:
            validate_keys(self.test_csv_file_missing_columns, self.sample_workflow)
        except Exception as e:
            self.assertEqual(str(e), "The dataset is missing some columns")

    def test_validate_keys_duplicate_columns(self):
        try:
            validate_keys(self.test_csv_file_duplicate_columns, self.sample_workflow)
        except Exception as e:
            self.assertEqual(str(e), "There are duplicate column names")

    def test_validate_keys_correct_columns(self):
        try:
            validate_keys(self.test_csv_file, self.sample_workflow)
        except Exception as e:
            self.fail("An error has occurred")

    def test_validate_keys_extra_columns(self):
        try:
            validate_keys(self.test_csv_file_extra_columns, self.sample_workflow)
        except Exception as e:
            self.fail("An error has occurred")

    def test_format_csv(self):
        try:
            tasks = format_csv(self.test_csv_file, self.sample_workflow)
            # Check each workflow key appears once in the dataset
            for index, i in enumerate(self.sample_workflow.inputs):
                self.assertEqual(1, self.title_row.count(tasks[0][index]["key"]))
        except Exception as e:
            self.fail("An error has occurred")
    
    def test_create_tasks(self):
        try:
            create_tasks(format_csv(self.test_csv_file, self.sample_workflow), self.sample_workflow)
            tasks = Task.objects.all()
            for task in tasks:
                # Checks that every input key exists exactly once in the csv
                for input in task.input_data:
                    self.assertEqual(self.title_row.count([*input][0]), 1)
        except Exception as e:
            self.fail("An error has occurred")
            