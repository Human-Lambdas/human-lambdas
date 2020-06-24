from rest_framework.generics import  RetrieveUpdateAPIView
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated

from .models import Notification



class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ["__all__"]
        extra_kwargs = {}

    # def update(self, instance, validated_data):
    #
    #     return instance


class NotificationView(RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = NotificationSerializer

    def get_queryset(self):
        user = self.request.user
        return user.notifications

    # def get_object(self):
    #     obj = get_object_or_404(self.get_queryset())
    #     return obj
    #
    # def retrieve(self, request, *args, **kwargs):
    #     instance = self.get_object()
    #     serializer = self.get_serializer(instance)
    #     return Response(data, status=200)
    #
    # def update(self, request, *args, **kwargs):
    #     partial = kwargs.pop("partial", False)
    #     instance = self.get_object()
    #     # change password work
    #     if request.data.get("currentPassword") or request.data.get("password"):
    #         if "currentPassword" not in request.data or "password" not in request.data:
    #             error_message = (
    #                 "Both the current password and the new password must be provided"
    #             )
    #             return Response(
    #                 {"status_code": 400, "errors": [{"message": error_message}]},
    #                 status=400,
    #             )
    #         if not instance.check_password(request.data["currentPassword"]):
    #             error_message = (
    #                 "The current password provided does not match the user password"
    #             )
    #             return Response(
    #                 {"status_code": 400, "errors": [{"message": error_message}]},
    #                 status=400,
    #             )
    #     # throw any errors otherwise let through
    #     serializer = self.get_serializer(instance, data=request.data, partial=partial)
    #     serializer.is_valid(raise_exception=True)
    #     self.perform_update(serializer)
    #     serializer.data["status_code"] = 200
    #     return Response(serializer.data, status=200)