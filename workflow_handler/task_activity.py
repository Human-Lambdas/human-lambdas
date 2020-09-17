from rest_framework.generics import ListCreateAPIView
from rest_framework.generics import RetrieveDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework import serializers

from .models import TaskActivity


class ActivitySerializer(serializers.ModelSerializer):
    class Meta:
        fields = "__all__"
        model = TaskActivity


class LCActivityView(ListCreateAPIView):
    permission_classes = (IsAuthenticated,)
    serializer_class = ActivitySerializer

