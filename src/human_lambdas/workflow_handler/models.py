from typing import Any, Dict

from django.db import models
from rest_hooks.models import AbstractHook
from rest_hooks.signals import hook_event

from human_lambdas.data_handler.data_transformation import transform_int2ext
from human_lambdas.user_handler.models import Notification, Organization, User
from human_lambdas.workflow_handler import regional_storage
from human_lambdas.workflow_handler.fields import JSONField
from human_lambdas.workflow_handler.region import Region

STATUS_MAPPING = {"assigned": "in_progress", "pending": "new"}


class Workflow(models.Model):
    name = models.CharField(max_length=140)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    inputs = JSONField(default=list)
    outputs = JSONField(default=list)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    disabled = models.BooleanField(default=False)
    n_tasks = models.IntegerField(default=0)
    data = JSONField(blank=True, default=list)
    is_running = models.BooleanField(default=False)
    task_description = models.TextField(null=True)
    guidelines_url = models.TextField(null=True)
    pinned_block = models.TextField(null=True)

    def __str__(self):
        return self.name


class Source(models.Model):
    name = models.CharField(max_length=512)
    workflow = models.ForeignKey(Workflow, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Task(models.Model):
    status = models.CharField(max_length=128, default="new")
    completed_at = models.DateTimeField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    assigned_at = models.DateTimeField(null=True)
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    session_started_at = models.DateTimeField(null=True)
    handling_time_seconds = models.IntegerField(default=0)
    workflow = models.ForeignKey(Workflow, on_delete=models.CASCADE)
    inputs = JSONField(default=list)
    outputs = JSONField(default=list)
    source = models.ForeignKey(Source, on_delete=models.CASCADE, null=True)
    data = JSONField(blank=True, default=list)
    correct = models.BooleanField(null=True)
    region = models.CharField(max_length=128, null=True)

    def __str__(self):
        return "{0}_task_{1}".format(self.workflow.name, self.pk)

    @classmethod
    def from_db(cls, db, field_names, values):
        task = super(Task, cls).from_db(db, field_names, values)

        if "data" in field_names and task.region:
            region = Region[task.region]
            task.data = regional_storage.retrieve(task.pk, region)

        return task

    def save(
        self,
        force_insert=False,
        force_update=False,
        using=None,
        update_fields=None,
    ):
        if self.region is None or "data" in self.get_deferred_fields():
            super(Task, self).save()
            return

        region = Region[self.region]

        # Save mutated task in DB *without* region-sensitive data. Beware: this is a hack which protects data sovereignty
        data: Any = self.data
        self.data = {}
        try:
            super(Task, self).save()
            regional_storage.store(self.pk, region, data)
        finally:
            # restore regional data on task
            self.data = data

    def get_status(self):
        return STATUS_MAPPING.get(self.status, self.status)

    def task_completed(self, user):
        hook_event.send(
            sender=self.__class__, action="completed", instance=self, user=user
        )

    def get_updated_status(self) -> Dict[Any, Any]:
        task: Dict[Any, Any] = {
            "id": self.pk,
            "status": self.get_status(),
            "completed_at": self.completed_at,
            "created_at": self.created_at,
            "assigned_at": self.assigned_at,
            "assigned_to": self.assigned_to.name if self.assigned_to else None,
            "queue": self.workflow.pk,
            "data": self.data,
            "source": self.source.pk if self.source else None,
            "n_comments": self.taskactivity_set.filter(action="comment").count(),
        }

        if self.region:
            task["region"] = self.region

        return task

    def get_formatted_task(self, include_data: bool = True) -> Dict[Any, Any]:
        if self.assigned_to:
            worker_id = self.assigned_to.pk
            worker_name = self.assigned_to.name
            worker_email = self.assigned_to.email
        else:
            worker_id, worker_name, worker_email = None, None, None
        if self.source:
            source_name, source_id = self.source.name, self.source.pk
        else:
            source_name, source_id = None, None
        task: Dict[Any, Any] = {
            "id": self.pk,
            "status": self.get_status(),
            "assigned_at": self.assigned_at,
            "assigned_to": worker_id,
            "completed_at": self.completed_at,
            "created_at": self.created_at,
            "completed_by": worker_name,
            "completed_by_email": worker_email,
            "queue": self.workflow.name,
            "queue_id": self.workflow.pk,
            "data": self.data if include_data else None,
            "source": source_name,
            "source_id": source_id,
            "n_comments": self.taskactivity_set.filter(action="comment").count(),
            "correct": self.correct,
            "org_id": self.workflow.organization_id,
        }

        if self.region:
            task["region"] = self.region

        return task

    def get_simple_formatted_task(self):
        if self.assigned_to:
            worker_email = self.assigned_to.email
        else:
            worker_email = None
        if self.source:
            source_name = self.source.name
        else:
            source_name = None
        task: Dict[Any, Any] = {
            "id": self.pk,
            "status": self.get_status(),
            "completed_at": self.completed_at,
            "created_at": self.created_at,
            "completed_by": worker_email,
            "queue": self.workflow.name,
            "queue_id": self.workflow.pk,
            "data": transform_int2ext(self.data),
            "source": source_name,
            "correct": self.correct,
        }

        if self.region:
            task["region"] = self.region

        return task

    def get_formatted_task_external(self):
        serilized_data = self.get_simple_formatted_task()
        return serilized_data  # process_external_completed_tasks(serilized_data)

    def serialize_hook(self, *args, **kwargs):
        return self.get_formatted_task_external()


class WebHook(AbstractHook):
    workflow = models.ForeignKey(Workflow, on_delete=models.CASCADE, default=None)
    is_zapier = models.BooleanField(default=False)


class WorkflowNotification(models.Model):
    workflow = models.ForeignKey(Workflow, on_delete=models.CASCADE)
    enabled = models.BooleanField(default=True)
    notification = models.ForeignKey(Notification, on_delete=models.CASCADE)
    last_notified = models.DateTimeField(null=True)


ACTIVITY_ACTIONS = [
    ("created", "created"),
    ("assigned", "assigned"),
    ("completed", "completed"),
    ("saved", "saved"),
    ("comment", "comment"),
    ("audited_correct", "audited_correct"),
    ("audited_incorrect", "audited_incorrect"),
    ("audited_empty", "audited_empty"),
]


ACTIVITY_SOURCES = [
    ("api", "api"),
    ("zapier", "zapier"),
    ("csv", "csv"),
    ("manual", "manual"),
]


class TaskActivity(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    created_by = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="creator"
    )
    action = models.CharField(max_length=128, choices=ACTIVITY_ACTIONS)
    source = models.CharField(max_length=64, choices=ACTIVITY_SOURCES, null=True)
    filename = models.CharField(max_length=128, null=True)
    assignee = models.ForeignKey(
        User, on_delete=models.CASCADE, null=True, related_name="assignee"
    )
    comment = models.TextField(null=True)
