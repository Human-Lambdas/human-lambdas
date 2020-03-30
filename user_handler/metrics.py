import logging
import re
import csv
from io import StringIO

from sendgrid.helpers.mail import Mail
from rest_framework.generics import (
    CreateAPIView,
    RetrieveUpdateAPIView,
    RetrieveAPIView,
    ListAPIView,
    RetrieveUpdateDestroyAPIView,
)
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404, get_list_or_404
from rest_framework.authtoken.models import Token
from django.template.loader import get_template
from django.conf import settings
from django.utils import timezone
import pytz
from django.db.models import Q, Sum, Count, F
from user_handler.permissions import IsOrgAdmin
from workflow_handler.models import Task

from .models import User, Organization, Invitation


MONTHS_BACK = 12
WEEKS_BACK = 52
DAYS_BACK = 365


def get_completed(start_time, end_time, organization):
    tasks = Task.objects.filter(Q(workflow__organization=organization) & Q(status="completed") & Q(
        completed_at__range=[start_time, end_time]))
    return tasks.count()


def get_pending(start_time, end_time, organization):
    tasks = Task.objects.filter(
        Q(workflow__organization=organization) & Q(status="pending") & Q(created_at__range=[start_time, end_time]))
    return tasks.count()


def get_aht(start_time, end_time, organization):
    result = Task.objects.filter(Q(workflow__organization=organization) & Q(status="completed") & Q(
        created_at__range=[start_time, end_time])).aggregate(
        aht=Sum(F('completed_at') - F('assigned_at')) / Count('completed_at'))
    return result


def get_tat(start_time, end_time, organization):
    result = Task.objects.filter(Q(workflow__organization=organization) & Q(status="completed") & Q(
        created_at__range=[start_time, end_time])).aggregate(
        aht=Sum(F('completed_at') - F('created_at')) / Count('completed_at'))

    return result


METRICS = {
    "completed": get_completed,
    "pending": get_pending,
    "aht": get_aht,
    "tat": get_tat,
}


def process_monthly():
    end = timezone.now()
    start = end.replace(day=1,hour=0, minute=0, second=0)
    time_ranges = [(start, end)]
    for _ in range(MONTHS_BACK):
        end = start
        start = (end - timezone.timedelta(days=1)).replace(day=1)
        time_ranges.append((start, end))
    return time_ranges


def process_weekly():
    end = timezone.now()
    start = (end - timezone.timedelta(days=end.isoweekday()-1)).replace(hour=0, minute=0, second=0)
    time_ranges = [(start, end)]
    for _ in range(WEEKS_BACK):
        end = start
        start = end - timezone.timedelta(days=7)
        time_ranges.append((start, end))
    return time_ranges


def process_daily():
    end = timezone.now()
    start = end.replace(hour=1, minute=1, second=1)
    time_ranges = [(start, end)]
    for _ in range(DAYS_BACK):
        end = start
        start = end - timezone.timedelta(days=1)
        time_ranges.append((start, end))
    return time_ranges


_TIME_RANGE_DICT = {
    "daily": process_daily,
    "weekly": process_weekly,
    "monthly": process_monthly,
}


class OrgsAbsolute(APIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)

    def get_queryset(self):
        return Organization.objects.filter(pk=self.kwargs["org_id"])

    def validate_data(self, data):
        pass

    def process_time_range(self, range_name):
        return _TIME_RANGE_DICT[range_name]()

    def get(self, request, *args, **kwargs):
        self.validate_data(request.data)
        organization = self.get_queryset().first()
        time_ranges = self.process_time_range(request.query_params.get("range"))
        data = []
        qtypes = request.query_params.getlist("type")
        for start_time, end_time in time_ranges:
            data_dict = {}
            for qtype in qtypes:
                data_dict[qtype] = METRICS[qtype](start_time, end_time, organization=organization)
            data.append(data_dict)
        return Response(data, status=200)