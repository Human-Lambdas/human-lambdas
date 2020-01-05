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
        self.user = user
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
        task = Task(workflow=workflow, inputs=self.preset_input_data,)
        task.save()
        self.task_id = task.pk

    def test_workflow_data(self):
        workflow = Workflow.objects.get(name=self.preset_workflow_name)
        self.assertEqual(workflow.description, self.preset_description)
        self.assertEqual(workflow.inputs, {})

    def test_task_data(self):
        task = Task.objects.get(pk=self.task_id)
        workflow = Workflow.objects.get(name=self.preset_workflow_name)
        self.assertEqual(task.inputs, self.preset_input_data)
        self.assertEqual(task.workflow, workflow)

    def test_workflow_data_changes(self):
        workflow = Workflow.objects.get(name=self.preset_workflow_name)
        workflow.description = self.preset_changed_description
        workflow.save()
        new_workflow = Workflow.objects.get(name=self.preset_workflow_name)
        self.assertEqual(new_workflow.description, self.preset_changed_description)

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
    
    def test_workflow_no_description(self):
        organization = Organization(name="noDescInc")
        organization.save()
        workflow = Workflow(
            name="no_desc_workflow",
            inputs={},
            outputs={},
            created_by=self.user,
            organization=organization,
        )
        workflow.save()
        no_description_workflow = Workflow.objects.get(name="no_desc_workflow")
        self.assertEqual(no_description_workflow.description, "")
