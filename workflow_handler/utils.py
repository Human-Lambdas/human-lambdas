import cchardet

from .models import WorkflowHook


def sync_workflow_task(workflow, task):
    if task.status != "completed":
        inputs = []
        for workflow_input in workflow.inputs:
            final_input = {}
            final_input["id"] = workflow_input["id"]
            final_input["name"] = workflow_input["name"]
            final_input["type"] = workflow_input["type"]
            if "subtype" in workflow_input and workflow_input["type"] == "list":
                final_input["subtype"] = workflow_input["subtype"]
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
        if task.outputs != workflow.outputs:
            task.outputs = workflow.outputs


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
