import copy
import datetime

import cchardet
from django.utils import timezone
from django.utils.timezone import make_aware
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.response import Response

from .models import WebHook, Workflow, WorkflowNotification

TEMPLATE_ORG_ID = 40
STAFF_ORG_ID = 1000000000


def parse_dates(request):
    try:
        start_date = datetime.datetime.fromisoformat(
            request.query_params.get("start_date")
        )  # YYYY-MM-DD
    except:
        start_date = datetime.datetime(2019, 1, 1)
    try:
        end_date = datetime.datetime.fromisoformat(
            request.query_params.get("end_date")
        )  # YYYY-MM-DD
        end_date += datetime.timedelta(days=1, microseconds=-1)
    except:
        end_date = datetime.datetime.today()
    return make_aware(start_date), make_aware(end_date)


def find_and_fire_hook(event_name, instance, **kwargs):
    filters = {
        "event": event_name,
        "workflow": instance.workflow,
    }
    hooks = WebHook.objects.filter(**filters)
    for hook in hooks:
        hook.deliver_hook(instance)


def decode_csv(file_obj):
    for line in file_obj:
        yield unidecode(line)


def unidecode(text):
    try:
        return text.decode("utf-8")
    except UnicodeDecodeError:
        return text.decode(cchardet.detect(text)["encoding"])


def process_query_params(query_params):
    filter_mapper = [
        ("workflow__pk", "queue_id"),
        ("assigned_to__pk", "worker_id"),
        ("source__pk", "source_id"),
    ]
    filters = {}
    for filter_name, param_name in filter_mapper:
        filter_value = query_params.get(param_name)
        if filter_value:
            filters[filter_name] = filter_value
    return filters


class TaskPagination(LimitOffsetPagination):
    """
    Extended pagination class for Tasks
    """

    default_limit = 100
    max_limit = 1000

    def get_paginated_response(self, data):
        return Response(
            {
                "next": self.get_next_link(),
                "previous": self.get_previous_link(),
                "count": self.count,
                "tasks": data,
            },
            status=200,
        )


def create_template(template_id, user, org):
    if template_id:
        workflow = Workflow.objects.filter(
            organization=TEMPLATE_ORG_ID, pk=template_id
        ).first()
        if workflow:
            Workflow(
                name=workflow.name,
                created_by=user,
                data=copy.deepcopy(workflow.data),
                organization=org,
            ).save()
            for org_user in org.user.all():
                wfnotification = WorkflowNotification(
                    workflow=workflow, notification=org_user.notifications, enabled=True
                )
                wfnotification.save()


def get_session_duration_seconds(task):
    if task.session_started_at:
        delta_since_start = timezone.now() - task.session_started_at
        return delta_since_start / timezone.timedelta(seconds=1)

    return 0


def is_force(query_params):
    force = query_params.get("force")
    if force:
        return force.lower() == "true"
    return False
