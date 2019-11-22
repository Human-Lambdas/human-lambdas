from django.test import TestCase
from .models import Workflow, Task
from user_handler.models import User, Organization


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
