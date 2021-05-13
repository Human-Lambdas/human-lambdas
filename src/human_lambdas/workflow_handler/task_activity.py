from django.db.models import Q
from django.utils import timezone
from rest_framework import serializers
from rest_framework.generics import ListCreateAPIView, RetrieveDestroyAPIView
from rest_framework.permissions import IsAuthenticated

from .models import Organization, Task, TaskActivity, Workflow
from .serializers import TaskSerializer
from .utils import STAFF_ORG_ID, get_session_duration_seconds


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


def get_task(user, org_id, workflow_id, task_id):
    if org_id == STAFF_ORG_ID:
        return Task.objects.defer("data").filter(pk=task_id).first()

    organizations = Organization.objects.filter(user=user).all()
    workflows = Workflow.objects.filter(
        Q(organization__in=organizations) & Q(organization__pk=org_id)
    )
    return (
        Task.objects.defer("data")
        .filter(Q(workflow__in=workflows) & Q(workflow=workflow_id) & Q(pk=task_id))
        .first()
    )


class ActivityView(ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = ActivitySerializer
    task_serializer_class = TaskSerializer

    def get_queryset(self):
        user = self.request.user

        task: Task = get_task(
            user,
            self.kwargs["org_id"],
            self.kwargs["workflow_id"],
            self.kwargs["task_id"],
        )

        if user.id == task.assigned_to_id:
            task.session_started_at = timezone.now()
            task.save()

        return TaskActivity.objects.filter(task=task).order_by("-created_at")

    def post(self, request, *args, **kwargs):
        request.data["created_by"] = self.request.user.pk
        request.data["task"] = self.kwargs["task_id"]

        user = self.request.user

        task = get_task(
            user,
            self.kwargs["org_id"],
            self.kwargs["workflow_id"],
            self.kwargs["task_id"],
        )

        if task.assigned_to and user.id == task.assigned_to.id:
            task.handling_time_seconds += get_session_duration_seconds(task)
            task.session_started_at = None
            task.save()

        return self.create(request, *args, **kwargs)


class RDActivityView(RetrieveDestroyAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = ActivitySerializer

    def get_queryset(self):
        user = self.request.user
        if getattr(self, "swagger_fake_view", False):
            # queryset just for schema generation metadata
            return TaskActivity.objects.none()

        task = get_task(
            user,
            self.kwargs["org_id"],
            self.kwargs["workflow_id"],
            self.kwargs["task_id"],
        )

        return TaskActivity.objects.filter(task=task, action="comment")

    def delete(self, request, *args, **kwargs):
        user = self.request.user
        task = get_task(
            user,
            self.kwargs["org_id"],
            self.kwargs["workflow_id"],
            self.kwargs["task_id"],
        )

        if task.assigned_to and user.id == task.assigned_to.id:
            task.handling_time_seconds += get_session_duration_seconds(task)
            task.session_started_at = None
            task.save()

        return self.destroy(request, *args, **kwargs)
