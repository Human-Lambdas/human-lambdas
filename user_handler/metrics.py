from uuid import uuid4

from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from django.utils import timezone
from django.db.models import Q, F, Avg
from user_handler.permissions import IsOrgAdmin
from workflow_handler.models import Task, Workflow

from .models import Organization

MONTHS_BACK = 12
WEEKS_BACK = 14
DAYS_BACK = 28


def process_kwargs(**kwargs):
    query = Q(workflow__organization=kwargs["organization"]) & Q(
        workflow__disabled=False
    )
    if "workflow" in kwargs:
        query = query & Q(workflow=kwargs["workflow"])
    return query


def get_completed(**kwargs):
    basic_query = process_kwargs(**kwargs)
    tasks = Task.objects.filter(
        basic_query
        & Q(status="completed")
        & Q(completed_at__range=[kwargs["start_time"], kwargs["end_time"]])
    )
    return tasks.count()


def get_pending(**kwargs):
    basic_query = process_kwargs(**kwargs)
    result = Task.objects.filter(
        basic_query
        & Q(created_at__lte=kwargs["end_time"])
        & Q(Q(completed_at__gt=kwargs["end_time"]) | Q(completed_at=None))
    ).count()
    return result


def get_aht(**kwargs):
    basic_query = process_kwargs(**kwargs)
    result = Task.objects.filter(
        basic_query
        & Q(status="completed")
        & Q(completed_at__range=[kwargs["start_time"], kwargs["end_time"]])
    ).aggregate(aht=Avg(F("completed_at") - F("assigned_at")))
    aht = result["aht"]
    return aht / timezone.timedelta(seconds=1) if aht else 0


def get_tat(**kwargs):
    basic_query = process_kwargs(**kwargs)
    result = Task.objects.filter(
        basic_query
        & Q(status="completed")
        & Q(completed_at__range=[kwargs["start_time"], kwargs["end_time"]])
    ).aggregate(tat=Avg(F("completed_at") - F("created_at")))
    tat = result["tat"]
    return tat / timezone.timedelta(seconds=1) if tat else 0


METRICS = {
    "completed": get_completed,
    "pending": get_pending,
    "aht": get_aht,
    "tat": get_tat,
}


def process_monthly():
    end = timezone.now()
    start = end.replace(day=1, hour=0, minute=0, second=0)
    time_ranges = [(start, end)]
    for _ in range(MONTHS_BACK):
        end = start
        start = (end - timezone.timedelta(days=1)).replace(day=1)
        time_ranges.append((start, end))
    return time_ranges


def process_weekly():
    end = timezone.now()
    start = (end - timezone.timedelta(days=end.isoweekday() - 1)).replace(
        hour=0, minute=0, second=0
    )
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


class OrganizationMetrics(APIView):
    permission_classes = (IsAuthenticated, IsOrgAdmin)

    def get_queryset(self):
        return Organization.objects.filter(pk=self.kwargs["org_id"])

    def validate_data(self, data):
        pass

    def process_time_range(self, range_name):
        return _TIME_RANGE_DICT[range_name]()

    def get(self, request, *args, **kwargs):
        self.validate_data(request.data)
        data = []
        qtypes = request.query_params.getlist("type")
        if any([qtype in METRICS for qtype in qtypes]):
            organization = self.get_queryset().first()
            time_ranges = self.process_time_range(request.query_params.get("range"))
            for start_time, end_time in time_ranges:
                data_dict = {
                    "date": end_time,
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
        data = []
        qtype = request.query_params.get("type")
        workflow_id = request.query_params.get("workflow_id")
        if qtype in METRICS:
            organization = self.get_queryset().first()
            if workflow_id:
                workflows = Workflow.objects.filter(
                    organization=organization, pk=workflow_id,
                ).all()
            else:
                workflows = Workflow.objects.filter(organization=organization).all()
            time_ranges = self.process_time_range(request.query_params.get("range"))
            for start_time, end_time in time_ranges:
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
        return Response(data, status=200)