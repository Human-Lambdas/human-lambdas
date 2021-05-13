import logging

from django.conf import settings
from django.shortcuts import get_object_or_404
from django.utils import timezone
from rest_framework import serializers
from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework.permissions import IsAuthenticated

from human_lambdas.hl_rest_api import analytics

from .apps import UserHandlerConfig
from .models import Notification, User

logger = logging.getLogger(__name__)


class NotificationSerializer(serializers.ModelSerializer):
    queue_notifications = serializers.JSONField()

    class Meta:
        model = Notification
        fields = "__all__"
        extra_kwargs = {}

    def to_representation(self, instance):
        return instance.format_output()

    def update(self, instance, validated_data):
        instance.enabled = validated_data.get("enabled", instance.enabled)
        workflow_notifications = validated_data.get("queue_notifications", [])
        any_enabled = False
        for workflow_notification in workflow_notifications:
            wfnotification_obj = instance.workflownotification_set.filter(
                workflow__pk=workflow_notification["queue_id"],
                workflow__disabled=False,
            ).first()
            if wfnotification_obj:
                wfnotification_obj.enabled = workflow_notification["enabled"]
                wfnotification_obj.save()
                any_enabled = True if workflow_notification["enabled"] else False
        instance.save()
        analytics.track(
            self.context["request"].user.pk,
            "Notifications Update",
            {"all_enabled": instance.enabled, "any_enabled": any_enabled},
        )
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
    ).distinct()
    emails = []
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
        emails.append(user.email)
        wf_notification.last_notified = timezone.now()
        wf_notification.save()
    if emails:
        if (
            settings.SEND_NOTIFICATION_TEMPLATE is None
            or settings.NOTIFICATION_ASM_GROUPID is None
        ):
            logger.warn("Sendgrid not set up, ignoring email trigger")
            return

        template_data = {
            "workflow_name": workflow.name,
            "org_id": workflow.organization.pk,
            "hl_url": settings.FRONT_END_BASE_URL,
            "workflow_id": workflow.pk,
        }
        UserHandlerConfig.emailclient.send_email(
            to_email=emails,
            template_id=settings.SEND_NOTIFICATION_TEMPLATE,
            template_data=template_data,
            group_id=int(settings.NOTIFICATION_ASM_GROUPID),
        )
