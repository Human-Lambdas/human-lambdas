from django.db import models
from django.contrib.postgres.fields import JSONField
from user_handler.models import User, Organization, Notification
from rest_hooks.signals import hook_event
from rest_hooks.models import AbstractHook
from external.task_formats import process_external_completed_tasks


STATUS_MAPPING = {"completed": "COMPLETED", "assigned": "IN PROGRESS", "pending": "NEW"}


class Workflow(models.Model):
    name = models.CharField(max_length=140)
    description = models.TextField(blank=True)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    inputs = JSONField(default=list)
    outputs = JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    disabled = models.BooleanField(default=False)
    n_tasks = models.IntegerField(default=0)
    data = JSONField(blank=True, default=list)

    def __str__(self):
        return self.name


class Source(models.Model):
    name = models.CharField(max_length=128)
    workflow = models.ForeignKey(Workflow, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Task(models.Model):
    status = models.CharField(max_length=128, default="pending")
    completed_at = models.DateTimeField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    assigned_at = models.DateTimeField(null=True)
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    workflow = models.ForeignKey(Workflow, on_delete=models.CASCADE)
    inputs = JSONField(default=list)
    outputs = JSONField(default=list)
    source = models.ForeignKey(Source, on_delete=models.CASCADE, null=True)
    data = JSONField(blank=True, default=list)

    def __str__(self):
        return "{0}_task_{1}".format(self.workflow.name, self.pk)

    def task_completed(self, user):
        hook_event.send(
            sender=self.__class__, action="completed", instance=self, user=user
        )

    def get_updated_status(self):
        return {
            "id": self.pk,
            "status": STATUS_MAPPING[self.status],
            "completed_at": self.completed_at,
            "created_at": self.created_at,
            "assigned_at": self.assigned_at,
            "assigned_to": self.assigned_to.name if self.assigned_to else None,
            "workflow": self.workflow.pk,
            "inputs": self.inputs,
            "outputs": self.outputs,
            "data": self.data,
            "source": self.source.pk if self.source else None,
        }

    def get_formatted_task(self):
        if self.assigned_to:
            worker_name = self.assigned_to.name
            worker_email = self.assigned_to.email
        else:
            worker_name, worker_email = None, None
        if self.source:
            source_name, source_id = self.source.name, self.source.pk
        else:
            source_name, source_id = None, None
        return {
            "id": self.pk,
            "status": self.status,
            "completed_at": self.completed_at,
            "created_at": self.created_at,
            "completed_by": worker_name,
            "completed_by_email": worker_email,
            "workflow": self.workflow.name,
            "workflow_id": self.workflow.pk,
            "inputs": self.inputs,
            "outputs": self.outputs,
            "data": self.data,
            "source": source_name,
            "source_id": source_id,
        }

    def get_simple_formatted_task(self):
        if self.assigned_to:
            worker_email = self.assigned_to.email
        else:
            worker_email = None
        if self.source:
            source_name = self.source.name
        else:
            source_name = None
        return {
            "id": self.pk,
            "status": self.status,
            "completed_at": self.completed_at,
            "created_at": self.created_at,
            "completed_by": worker_email,
            "workflow": self.workflow.name,
            "workflow_id": self.workflow.pk,
            "inputs": self.inputs,
            "outputs": self.outputs,
            "data": self.data,
            "source": source_name,
        }

    def get_formatted_task_external(self):
        serilized_data = self.get_simple_formatted_task()
        return process_external_completed_tasks(serilized_data)

    def serialize_hook(self, *args, **kwargs):
        return self.get_formatted_task_external()


class WorkflowHook(AbstractHook):
    workflow = models.OneToOneField(Workflow, on_delete=models.CASCADE,)


class WorkflowNotification(models.Model):
    workflow = models.ForeignKey(Workflow, on_delete=models.CASCADE)
    enabled = models.BooleanField(default=True)
    notification = models.ForeignKey(Notification, on_delete=models.CASCADE)
    last_notified = models.DateTimeField(null=True)
