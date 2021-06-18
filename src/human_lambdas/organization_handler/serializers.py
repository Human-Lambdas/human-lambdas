import os

from rest_framework import serializers

from human_lambdas.user_handler.models import Organization


class OrganizationSerializer(serializers.ModelSerializer):
    metrics = serializers.SerializerMethodField("has_metrics")

    def has_metrics(self, org):
        return True if "POSTGRES_DB" in os.environ else False

    class Meta:
        model = Organization
        fields = ["name", "user", "admin", "id", "metrics"]
