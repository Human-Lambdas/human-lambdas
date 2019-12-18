from django.db import models
from django.contrib.postgres.fields import JSONField
from user_handler.models import User, Organization


class Workflow(models.Model):
    name = models.CharField(max_length=128)
    description = models.TextField()
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE)
    inputs = JSONField()
    outputs = JSONField()
    created_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Task(models.Model):
    name = models.CharField(max_length=128)
    completed = models.DateTimeField(null=True)
    created_at = models.DateTimeField(auto_now=True)
    completed_by = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    workflow = models.ForeignKey(Workflow, on_delete=models.CASCADE)
    input_data = JSONField()
    output_data = JSONField(null=True)

    def __str__(self):
        return self.name
