import copy

import cchardet
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination

from .models import WorkflowHook


def sync_workflow_task(workflow, task):
    if task.status != "completed":
        updated_data = []
        for workflow_data in workflow.data:
            final_data = copy.deepcopy(workflow_data)
            for t_data in task.data:
                if (
                    "value" in t_data[t_data["type"]]
                    and t_data["id"] == workflow_data["id"]
                ):
                    final_data[final_data["type"]]["value"] = t_data[t_data["type"]][
                        "value"
                    ]
            updated_data.append(final_data)
        task.data = updated_data


def find_and_fire_hook(event_name, instance, **kwargs):
    filters = {
        "event": event_name,
        "workflow": instance.workflow,
    }
    hooks = WorkflowHook.objects.filter(**filters)
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
        ("workflow__pk", "workflow_id"),
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
