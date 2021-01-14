import json
import pathlib

from django.db import models
from rest_framework import serializers
from rest_framework.generics import ListAPIView
from rest_framework.permissions import IsAuthenticated

from user_handler.models import User


class Template(models.Model):
    name = models.CharField(max_length=140)
    summary = models.CharField(max_length=140)
    thumbnail = models.CharField(max_length=140)


class TemplatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Template
        fields = ["name"]


class TemplatesView(ListAPIView):
    permission_classes = (IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = TemplatesSerializer

    def get_queryset(self):
        text = pathlib.Path("templates.json").read_text()
        return map(lambda t: Template(**t), json.loads(text))
