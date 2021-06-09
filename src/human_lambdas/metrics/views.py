import logging
from uuid import uuid4

from django.conf import settings
from django.db.models import Avg, F, Q
from django.utils import timezone
from drf_yasg2.utils import swagger_auto_schema
from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from human_lambdas.user_handler.models import Organization, User
from human_lambdas.user_handler.permissions import IsOrgAdmin
from human_lambdas.workflow_handler.models import Task, Workflow

logger = logging.getLogger(__name__)

MONTHS_BACK = 12
WEEKS_BACK = 14
DAYS_BACK = 28


def process_kwargs(**kwargs):
    query = Q(workflow__organization=kwargs["organization"]) & Q(
        workflow__disabled=False
    )
    if "workflow" in kwargs:
        query = query & Q(workflow=kwargs["workflow"])
    if "worker" in kwargs:
        query = query & Q(assigned_to=kwargs["worker"])
    return query


def get_completed(**kwargs):
    basic_query = process_kwargs(**kwargs)
    tasks = Task.objects.defer("data").filter(
        basic_query
        & Q(status="completed")
        & Q(completed_at__range=[kwargs["start_time"], kwargs["end_time"]])
    )
    return tasks.count()


def get_pending(**kwargs):
    basic_query = process_kwargs(**kwargs)
    result = (
        Task.objects.defer("data")
        .filter(
            basic_query
            & Q(created_at__lte=kwargs["end_time"])
            & Q(Q(completed_at__gt=kwargs["end_time"]) | Q(completed_at=None))
        )
        .count()
    )
    return result


def get_aht(**kwargs):
    basic_query = process_kwargs(**kwargs)
    result = (
        Task.objects.defer("data")
        .filter(
            basic_query
            & Q(status="completed")
            & Q(completed_at__range=[kwargs["start_time"], kwargs["end_time"]])
        )
        .aggregate(aht=Avg(F("handling_time_seconds")))
    )
    aht = result["aht"]
    return aht if aht else None


def get_tat(**kwargs):
    basic_query = process_kwargs(**kwargs)
    result = (
        Task.objects.defer("data")
        .filter(
            basic_query
            & Q(status="completed")
            & Q(completed_at__range=[kwargs["start_time"], kwargs["end_time"]])
        )
        .aggregate(tat=Avg(F("completed_at") - F("created_at")))
    )
    tat = result["tat"]
    return tat / timezone.timedelta(seconds=1) if tat else None


def get_accuracy(**kwargs):
    basic_query = process_kwargs(**kwargs)
    all_audited = Task.objects.defer("data").filter(
        basic_query
        & ~Q(correct=None)
        & Q(completed_at__range=[kwargs["start_time"], kwargs["end_time"]])
    )

    if not all_audited.exists():
        return None

    num_audited = float(len(all_audited))
    num_correct = float(len(all_audited.filter(Q(correct=True))))

    return num_correct / num_audited


METRICS = {
    "completed": get_completed,
    "pending": get_pending,
    "aht": get_aht,
    "tat": get_tat,
    "accuracy": get_accuracy,
}

WORKER_METRICS = {
    "completed": get_completed,
    "aht": get_aht,
    "accuracy": get_accuracy,
}


class WorkflowMetricsQuerySerializer(serializers.Serializer):
    range = serializers.CharField(required=False)
    type = serializers.MultipleChoiceField(list(METRICS.keys()), required=False)


def process_monthly():
    end = timezone.now()
    start = end.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
    time_ranges = [(start, end)]
    for _ in range(MONTHS_BACK):
        end = start
        start = (end - timezone.timedelta(days=1)).replace(day=1)
        time_ranges.append((start, end))
    return time_ranges


def process_weekly():
    end = timezone.now()
    start = (end - timezone.timedelta(days=end.isoweekday() - 1)).replace(
        hour=0, minute=0, second=0, microsecond=0
    )
    time_ranges = [(start, end)]
    for _ in range(WEEKS_BACK):
        end = start
        start = end - timezone.timedelta(days=7)
        time_ranges.append((start, end))
    return time_ranges


def process_daily():
    end = timezone.now()
    start = end.replace(hour=0, minute=0, second=0, microsecond=0)
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


class OrganizationMetrics(APIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)

    def get_queryset(self):
        return Organization.objects.filter(pk=self.kwargs["org_id"])

    def validate_data(self, data):
        pass

    def process_time_range(self, range_name):
        return _TIME_RANGE_DICT[range_name]()

    @swagger_auto_schema(query_serializer=WorkflowMetricsQuerySerializer)
    def get(self, request, *args, **kwargs):
        if settings.DATABASES["default"]["ENGINE"] == "django.db.backends.sqlite3":
            return Response(None, status=204)

        self.validate_data(request.data)
        data = []
        qtypes = request.query_params.getlist("type")
        if any([qtype in METRICS for qtype in qtypes]):
            organization = self.get_queryset().first()
            time_ranges = self.process_time_range(request.query_params.get("range"))
            for start_time, end_time in reversed(time_ranges):
                data_dict = {
                    "date": (end_time - timezone.timedelta(microseconds=1)).replace(
                        tzinfo=None
                    ),
                    "id": uuid4().hex,
                }
                for qtype in qtypes:
                    try:
                        data_dict[qtype] = METRICS[qtype](
                            start_time=start_time,
                            end_time=end_time,
                            organization=organization,
                        )
                    except KeyError:
                        continue
                data.append(data_dict)
        return Response(data, status=200)


class WorkflowMetrics(APIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)

    def get_queryset(self):
        return Organization.objects.filter(pk=self.kwargs["org_id"])

    def validate_data(self, data):
        pass

    def process_time_range(self, range_name):
        return _TIME_RANGE_DICT[range_name]()

    def get(self, request, *args, **kwargs):
        self.validate_data(request.data)
        qtypes = request.query_params.getlist("type")
        workflow_ids = request.query_params.getlist("workflow_id")
        if any([qtype in METRICS for qtype in qtypes]):
            organization = self.get_queryset().first()
            if workflow_ids:
                workflows = Workflow.objects.filter(
                    organization=organization, pk__in=workflow_ids, disabled=False
                ).all()
            else:
                workflows = Workflow.objects.filter(
                    organization=organization, disabled=False
                ).all()
            time_ranges = self.process_time_range(request.query_params.get("range"))
            result = {}
            for qtype in qtypes:
                data = []
                for start_time, end_time in reversed(time_ranges):
                    data_dict = {
                        "date": end_time,
                        "id": uuid4().hex,
                    }

                    for workflow in workflows:
                        try:
                            data_dict[workflow.name] = METRICS[qtype](
                                start_time=start_time,
                                end_time=end_time,
                                organization=organization,
                                workflow=workflow,
                            )
                        except KeyError:
                            continue
                    data.append(data_dict)
                result[qtype] = data
        return Response(result, status=200)


class WorkerMetrics(APIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)

    def get_queryset(self):
        return Organization.objects.filter(pk=self.kwargs["org_id"])

    def validate_data(self, data):
        pass

    def process_time_range(self, range_name):
        return _TIME_RANGE_DICT[range_name]()

    def get(self, request, *args, **kwargs):
        self.validate_data(request.data)
        qtypes = request.query_params.getlist("type")
        worker_id = request.query_params.getlist("worker_id")
        if any([qtype in WORKER_METRICS for qtype in qtypes]):
            organization = self.get_queryset().first()
            if worker_id:
                users = User.objects.filter(
                    organization=organization,
                    pk__in=worker_id,
                ).all()
            else:
                users = User.objects.filter(organization=organization).all()
            time_ranges = self.process_time_range(request.query_params.get("range"))
            result = {}
            for qtype in qtypes:
                data = []
                for start_time, end_time in reversed(time_ranges):
                    data_dict = {
                        "date": end_time,
                        "id": uuid4().hex,
                    }

                    for user in users:
                        try:
                            data_dict[user.name] = WORKER_METRICS[qtype](
                                start_time=start_time,
                                end_time=end_time,
                                organization=organization,
                                worker=user,
                            )
                        except KeyError:
                            continue
                    data.append(data_dict)
                result[qtype] = data
        return Response(result, status=200)
