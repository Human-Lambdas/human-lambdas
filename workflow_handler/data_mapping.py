import copy
from math import ceil

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
    if "layout" not in udata:
        udata["layout"] = {
            "h": 12,
            "i": udata["name"],
            "w": 12,
            "x": 1,
            "y": 1,
            "maxW": 2048,
            "minH": 1,
            "minW": 2,
        }
    return udata


"""
from https://github.com/Human-Lambdas/hl-web/blob/develop/src/universal/components/RGL.tsx
20 columns is the constraint.
Block dims: https://github.com/Human-Lambdas/hl-web/blob/develop/src/universal/utils/getBlockDims.ts

"""


def new_row():
    return [0] * 20


def is_collision(grid, block):
    x, y, w, h = (
        block["layout"]["x"],
        block["layout"]["y"],
        ceil(block["layout"]["w"]),
        ceil(block["layout"]["h"]),
    )
    if x + w > len(grid[0]):
        return True
    if y + h > len(grid):
        return True
    for i in range(h):
        for j in range(w):
            if grid[y + i][x + j] != 0:
                return True
    return False


def fix_collision(grid, workflow_data, i):
    # find space and adjust block props in workflow_data[i]
    # includes adding rows if necessary
    while is_collision(grid, workflow_data[i]):
        while workflow_data[i]["layout"]["y"] + workflow_data[i]["layout"]["h"] > len(
            grid
        ):
            grid += [new_row()]
        if workflow_data[i]["layout"]["w"] > len(grid[0]):
            workflow_data[i]["layout"]["w"] = len(grid[0])
            continue
        if workflow_data[i]["layout"]["x"] + workflow_data[i]["layout"]["w"] > len(
            grid[0]
        ):
            workflow_data[i]["layout"]["x"] = 0
            workflow_data[i]["layout"]["y"] += 1
            continue
        if is_collision(grid, workflow_data[i]):
            workflow_data[i]["layout"]["x"] += 1


def fill_grid(grid, block):
    x, y, w, h = (
        block["layout"]["x"],
        block["layout"]["y"],
        ceil(block["layout"]["w"]),
        ceil(block["layout"]["h"]),
    )
    for i in range(h):
        for j in range(w):
            grid[y + i][x + j] = 1


def fix_collisions(workflow_data):
    grid = [new_row()]
    for i in range(len(workflow_data)):
        if is_collision(grid, workflow_data[i]):
            fix_collision(grid, workflow_data, i)
        fill_grid(grid, workflow_data[i])


def update_block_props(block_type, layout):
    if block_type == "audio":
        layout["w"], layout["h"] = 5, 2
    if block_type == "binary":
        layout["w"], layout["h"] = 4, 4
    if block_type == "image":
        layout["w"], layout["h"] = 4, 4
    if block_type == "number":
        layout["w"], layout["h"] = 5, 2
    if block_type == "single_selection":
        layout["w"], layout["h"] = 5, 4
    if block_type == "multiple_selection":
        layout["w"], layout["h"] = 5, 4
    if block_type == "form_sequence":
        layout["w"], layout["h"] = 5, 4
    if block_type == "text":
        layout["w"], layout["h"] = 5, 3
    if block_type == "video":
        layout["w"], layout["h"] = 6, 4


def output2data(output_data, is_task=False):
    data = copy.deepcopy(output_data)
    data["layout"] = {
        "h": 4,
        "i": data["name"],
        "w": 4,
        "x": 12,
        "y": 12,
        "maxW": 2048,
        "minH": 1,
        "minW": 1,
    }
    update_block_props(output_data["type"], data["layout"])
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
    fix_collisions(workflow_data)
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
        if "layout" not in idata:
            idata["layout"] = {
                "h": 12,
                "i": idata["name"],
                "w": 12,
                "x": 12,
                "y": 12,
                "maxW": 2048,
                "minH": 1,
                "minW": 2,
            }
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
