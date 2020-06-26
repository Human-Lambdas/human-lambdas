from rest_framework.generics import RetrieveUpdateAPIView
from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import get_object_or_404


from .models import Notification


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
            wfnotification_obj = instance.workflownotification_set.filter(workflow__pk=workflow_notification["id"]).first()
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

    # def update(self, request, *args, **kwargs):
    #     partial = kwargs.pop("partial", False)
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance, data=request.data, partial=partial)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_update(serializer)
    #     serializer.data["status_code"] = 200
    #     return Response(serializer.data, status=200)