from rest_framework.generics import ListCreateAPIView
from rest_framework.generics import RetrieveDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import serializers
from django.db.models import Q

from .models import TaskActivity, Task, Organization, Workflow


class ActivitySerializer(serializers.ModelSerializer):
    assignee_name = serializers.SerializerMethodField(read_only=True)
    created_by_name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        fields = "__all__"
        model = TaskActivity

    def get_assignee_name(self, obj):
        if obj.assignee:
            return obj.assignee.name
        return None

    def get_created_by_name(self, obj):
        return obj.created_by.name


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
        return TaskActivity.objects.filter(task=task).order_by("-created_at")

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
