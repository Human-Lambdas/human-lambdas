from .models import WorkflowHook


def sync_workflow_task(workflow, task):
    if task.status != "completed":
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


def process_output_value(output_value):
    if isinstance(output_value, list):
        return [
            ioutput["value"] if isinstance(ioutput, dict) else ioutput
            for ioutput in output_value
        ]
    return output_value


def process_external_completed_tasks(serialized_list):
    for data in serialized_list:
        data["inputs"] = {d_input["id"]: d_input["value"] for d_input in data["inputs"]}
        data["outputs"] = {
            d_output["id"]: process_output_value(d_output[d_output["type"]]["value"])
            for d_output in data["outputs"]
        }
    return serialized_list
