import copy

from .models import WorkflowHook


def sync_workflow_task(workflow, task):
    inputs = []
    for workflow_input in workflow.inputs:
        final_input = {}
        final_input["id"] = workflow_input["id"]
        final_input["name"] = workflow_input["name"]
        final_input["type"] = workflow_input["type"]
        potential_input_value = [
            el["value"] for el in task.inputs if el["id"] == workflow_input["id"]
        ]
        final_input["value"] = (
            "" if not potential_input_value else potential_input_value[0]
        )
        if "layout" in workflow_input:
            final_input["layout"] = workflow_input["layout"]
        inputs.append(final_input)
    task.inputs = inputs
    outputs = copy.deepcopy(task.outputs)
    [
        output[output["type"]].pop("value")
        for output in outputs
        if "value" in output.get(output["type"], [])
    ]
    if outputs != workflow.outputs:
        task.outputs = workflow.outputs


def find_and_fire_hook(event_name, instance, **kwargs):
    filters = {
        "event": event_name,
        "workflow": instance.workflow,
    }
    hooks = WorkflowHook.objects.filter(**filters)
    for hook in hooks:
        hook.deliver_hook(instance)
