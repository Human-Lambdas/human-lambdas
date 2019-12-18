from django.test import TestCase
from user_handler.models import User, Organization

from workflow_handler.models import Workflow, Task


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
