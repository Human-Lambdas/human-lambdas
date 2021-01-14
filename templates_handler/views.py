import json
import logging
import pathlib

from django.db import models
from rest_framework import serializers
from rest_framework.generics import ListAPIView

from user_handler.models import User

logger = logging.getLogger(__file__)


class Template(models.Model):
    name = models.CharField(max_length=140)
    summary = models.CharField(max_length=140)
    thumbnail = models.CharField(max_length=140)


class TemplatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Template
        fields = ["name"]


class TemplatesView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = TemplatesSerializer

    def get_queryset(self):
        try:
            text = pathlib.Path("templates.json").read_text()
            return map(lambda t: Template(**t), json.loads(text))
        except Exception:
            logger.exception("failed to read templates json")
            return []
