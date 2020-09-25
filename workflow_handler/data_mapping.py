import copy

from schema import SchemaError, Schema, And, Or, Optional


WORKFLOW_INPUT_SCHEMA = Schema(
    [
        {
            "id": And(str, len),
            "name": And(str, len),
            "type": Or("text", "image", "number", "date", "audio", "video", "list"),
            Optional("layout"): dict,
            Optional("subtype"): And(str, len),
        }
    ],
    ignore_extra_keys=True,
)


OUTPUT_SCHEMA = Schema(
    [
        {
            "id": And(str, len),
            "name": And(str, len),
            "type": Or(
                "binary",
                "text",
                "number",
                "date",
                "single-selection",
                "multiple-selection",
            ),
            Optional(
                Or(
                    "binary",
                    "text",
                    "number",
                    "date",
                    "single-selection",
                    "multiple-selection",
                )
            ): dict,
            Optional("logicJump"): dict,
        }
    ],
    ignore_extra_keys=True,
)


def input2data(input_data, is_task=True):
    data = copy.deepcopy(input_data)
    data[input_data["type"]] = {
        "read_only": True,
        "placeholder": None,
    }
    if is_task:
        data[input_data["type"]]["value"] = input_data["value"]
        del data["value"]
    if "subtype" in input_data:
        del data["subtype"]
        data[data["type"]]["subtype"] = input_data["subtype"]
    udata = underscore_conversion(data)
    return udata


def output2data(output_data, is_task=False):
    data = copy.deepcopy(output_data)
    if output_data["type"] not in output_data:
        data[output_data["type"]] = {}
    data[output_data["type"]]["read_only"] = False
    data[output_data["type"]]["placeholder"] = None
    if "value" not in data[output_data["type"]] and is_task:
        data[output_data["type"]]["value"] = None
    udata = underscore_conversion(data)
    return udata


def get_workflow_data(workflow):
    workflow_data = []
    WORKFLOW_INPUT_SCHEMA.validate(workflow.inputs)
    for w_inputs in workflow.inputs:
        data_item = input2data(w_inputs, is_task=False)
        if not data_item:
            continue
        workflow_data.append(data_item)
    OUTPUT_SCHEMA.validate(workflow.outputs)
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


def underscore_conversion(data):
    if data["type"] not in data:
        data[data["type"]] = {}
    data[data["type"]] = {k.replace("-", "_"): v for k, v in data[data["type"]].items()}
    data["type"] = data["type"].replace("-", "_")
    udata = {k.replace("-", "_"): v for k, v in data.items()}
    return udata


def data_underscore(data):
    new_data = []
    for idata in data:
        new_data.append(underscore_conversion(idata))
    return new_data


def migrate_data(workflow):
    try:
        wf_data = get_workflow_data(workflow)
        if wf_data:
            workflow.data = wf_data
        else:
            workflow.data = data_underscore(workflow.data)
        workflow.save()
    except SchemaError:
        return
    for task in workflow.task_set.all():
        task_data = get_task_data(task)
        if task_data:
            task.data = task_data
        else:
            task.data = data_underscore(task.data)
        task.save()
