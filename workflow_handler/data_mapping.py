import copy

from schema import SchemaError

from .schemas import WORKFLOW_INPUT_SCHEMA, OUTPUT_SCHEMA


def input2data(input_data, is_task=True):
    if not is_task:
        WORKFLOW_INPUT_SCHEMA.validate(input_data)
    data = copy.deepcopy(input_data)
    data[input_data["type"]] = {
        "read-only": True,
        "placeholder": None,
    }
    if is_task:
        data[input_data["type"]]["value"] = input_data["value"]
        del data["value"]
    if "subtype" in input_data:
        del data["subtype"]
        data[data["type"]]["subtype"] = input_data["subtype"]
    return data


def output2data(output_data, is_task=False):
    if not is_task:
        OUTPUT_SCHEMA.validate(output_data)
    data = copy.deepcopy(output_data)
    if output_data["type"] not in output_data:
        data[output_data["type"]] = {}
    data[output_data["type"]]["read-only"] = False
    data[output_data["type"]]["placeholder"] = None
    if "value" not in data[output_data["type"]] and is_task:
        data[output_data["type"]]["value"] = None
    return data


def get_workflow_data(workflow):
    workflow_data = []
    for w_inputs in workflow.inputs:
        data_item = input2data(w_inputs, is_task=False)
        if not data_item:
            continue
        workflow_data.append()
    for w_outputs in workflow.outputs:
        workflow_data.append(output2data(w_outputs, is_task=False))
    return workflow_data


def get_task_data(task):
    task_data = []
    for t_inputs in task.inputs:
        task_data.append(input2data(t_inputs, is_task=True))
    for t_outputs in task.outputs:
        task_data.append(output2data(t_outputs, is_task=True))
    return task_data


def migrate_data(workflow):
    try:
        workflow.data = get_workflow_data(workflow)
        workflow.save()
    except SchemaError:
        return
    for task in workflow.task_set.all():
        task.data = get_task_data(task)
        task.save()
