import json
import logging
import pathlib

from django.db import models
from rest_framework import serializers
from rest_framework.generics import ListAPIView

from human_lambdas.user_handler.models import User

logger = logging.getLogger(__name__)


class Template(models.Model):
    name = models.TextField()
    summary = models.TextField()
    thumbnail = models.TextField()


class TemplatesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Template
        fields = ["name", "summary", "thumbnail", "id"]


class TemplatesView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = TemplatesSerializer

    def get_queryset(self):
        try:
            text = pathlib.Path("templates.json").read_text()
            return map(lambda t: Template(**t), json.loads(text))
        except Exception:
            return []
