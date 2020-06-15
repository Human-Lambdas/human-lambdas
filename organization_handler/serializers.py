from rest_framework import serializers
from user_handler.models import Organization


class OrganizationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Organization
        fields = ["name", "user", "id"]
