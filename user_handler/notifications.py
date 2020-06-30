from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404
from django.utils import timezone
from django.conf import settings

from .apps import UserHandlerConfig
from .models import Notification, User


class NotificationSerializer(serializers.ModelSerializer):
    workflow_notifications = serializers.JSONField()

    class Meta:
        model = Notification
        fields = "__all__"
        extra_kwargs = {}

    def to_representation(self, instance):
        return instance.format_output()

    def update(self, instance, validated_data):
        instance.enabled = validated_data.get("enabled", instance.enabled)
        workflow_notifications = validated_data.get("workflow_notifications", [])
        for workflow_notification in workflow_notifications:
            wfnotification_obj = instance.workflownotification_set.filter(
                workflow__pk=workflow_notification["id"]
            ).first()
            if wfnotification_obj:
                wfnotification_obj.enabled = workflow_notification["enabled"]
                wfnotification_obj.save()
        instance.save()
        return instance


class NotificationView(RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = NotificationSerializer

    def get_queryset(self):
        user = self.request.user
        return Notification.objects.filter(pk=user.notifications.pk)

    def get_object(self):
        obj = get_object_or_404(self.get_queryset())
        return obj


def send_notification(workflow):
    users = User.objects.filter(
        notifications__workflownotification__workflow=workflow,
        notifications__enabled=True,
    ).all()
    for user in users:
        wf_notification = user.notifications.workflownotification_set.filter(
            workflow=workflow
        ).first()
        if not wf_notification.enabled or (
            wf_notification.last_notified
            and timezone.now() - wf_notification.last_notified
            < timezone.timedelta(minutes=settings.THROTTLING_TIME_MIN)
        ):
            continue
        template_data = {
            "workflow_name": workflow.name,
            "org_id": workflow.organization.pk,
        }
        UserHandlerConfig.emailclient.send_email(
            to_email=user.email,
            template_id=settings.SEND_NOTIFICATION_TEMPLATE,
            template_data=template_data,
            group_id=settings.NOTIFICATION_ASM_GROUPID,
        )
        wf_notification.last_notified = timezone.now()
        wf_notification.save()
