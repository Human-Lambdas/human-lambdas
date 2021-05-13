from django.test import TestCase

from human_lambdas.user_handler.models import Organization, User
from human_lambdas.workflow_handler.models import Task, Workflow


class TestModelWorkflow(TestCase):
    def setUp(self):
        self.preset_task_name = "bajs_task"
        self.preset_input_data = {"foo": "bar"}
        self.preset_changed_input_data = {"foo": "bar", "alpha": "beta"}
        self.preset_workflow_name = "bajs"
        self.preset_workflow_changed_name = "bajs"

        user = User(name="foo", email="foo@bar.com")
        user.save()
        self.user = user
        organization = Organization(name="fooInc")
        organization.save()
        organization.add_admin(user)
        workflow = Workflow(
            name=self.preset_workflow_name,
            inputs={},
            outputs={},
            created_by=user,
            organization=organization,
        )
        workflow.save()
        task = Task(workflow=workflow, inputs=self.preset_input_data, outputs={})
        task.save()
        self.task_id = task.pk

    def test_workflow_data(self):
        workflow = Workflow.objects.get(name=self.preset_workflow_name)
        self.assertEqual(workflow.name, self.preset_workflow_name)
        self.assertEqual(workflow.inputs, {})

    def test_task_data(self):
        task = Task.objects.get(pk=self.task_id)
        workflow = Workflow.objects.get(name=self.preset_workflow_name)
        self.assertEqual(task.inputs, self.preset_input_data)
        self.assertEqual(task.workflow, workflow)

    def test_workflow_data_changes(self):
        workflow = Workflow.objects.get(name=self.preset_workflow_name)
        workflow.name = self.preset_workflow_changed_name
        workflow.save()
        new_workflow = Workflow.objects.get(name=self.preset_workflow_changed_name)
        self.assertEqual(new_workflow.name, self.preset_workflow_changed_name)

    def test_task_data_changes(self):
        task = Task.objects.get(pk=self.task_id)
        task.inputs = self.preset_changed_input_data
        task.save()
        new_task = Task.objects.get(id=self.task_id)
        self.assertEqual(new_task.inputs, self.preset_changed_input_data)

    def test_workflow_data_deletion(self):
        workflow = Workflow.objects.all()
        workflow.delete()
        self.assertEqual(len(Workflow.objects.all()), 0)

    def test_task_data_deletion(self):
        task = Task.objects.all()
        task.delete()
        self.assertEqual(len(Task.objects.all()), 0)
