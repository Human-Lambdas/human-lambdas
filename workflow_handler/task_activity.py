from rest_framework.generics import ListCreateAPIView
from rest_framework.generics import RetrieveDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import serializers
from django.db.models import Q

from .models import TaskActivity, Task, Organization, Workflow


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = TaskActivity


class ActivityView(ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = ActivitySerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        task = Task.objects.filter(
            Q(workflow__in=workflows)
            & Q(workflow=self.kwargs["workflow_id"])
            & Q(pk=self.kwargs["task_id"])
        ).first()
        return TaskActivity.objects.filter(task=task)

    def post(self, request, *args, **kwargs):
        request.data["created_by"] = self.request.user.pk
        request.data["task"] = self.kwargs["task_id"]
        return self.create(request, *args, **kwargs)


class RDActivityView(RetrieveDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = ActivitySerializer

    def get_queryset(self):
        user = self.request.user
        organizations = Organization.objects.filter(user=user).all()
        workflows = Workflow.objects.filter(
            Q(organization__in=organizations)
            & Q(organization__pk=self.kwargs["org_id"])
        )
        task = Task.objects.filter(
            Q(workflow__in=workflows)
            & Q(workflow=self.kwargs["workflow_id"])
            & Q(pk=self.kwargs["task_id"])
        ).first()
        return TaskActivity.objects.filter(task=task, action="comment")
