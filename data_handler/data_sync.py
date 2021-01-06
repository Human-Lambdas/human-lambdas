import copy

from .data_validation import data_validation


def iterate_matching(workflow_data, task_data):
    for wdata in workflow_data:
        task_exists = False
        for tdata in task_data:
            if wdata["id"] == tdata["id"]:
                task_exists = True
                yield wdata, tdata
        if not task_exists:
            yield wdata, None


def form_sync(workflow_data, task_data):
    for w_data, t_data in iterate_matching(
        workflow_data[workflow_data["type"]]["data"],
        task_data[task_data["type"]]["data"],
    ):  # TODO: valdation of data here
        w_data[w_data["type"]]["value"] = t_data[t_data["type"]].get("value")
    if "history" in task_data[task_data["type"]]:
        history = task_data[task_data["type"]]["history"]
    else:
        history = []
    workflow_data[workflow_data["type"]]["history"] = history


def ner_sync(workflow_data, task_data):
    if "value" in task_data[task_data["type"]]:  # TODO: this should be a validation
        workflow_data[workflow_data["type"]]["value"] = task_data[task_data["type"]][
            "value"
        ]
        workflow_data[workflow_data["type"]]["entities"] = task_data[task_data["type"]][
            "entities"
        ]  # TODO: need a validation for this


def default_data_sync(workflow_data, task_data):
    # TODO: validate this value
    workflow_data[workflow_data["type"]]["value"] = task_data[task_data["type"]].get(
        "value"
    )
    if workflow_data[workflow_data["type"]]["value"] == None and workflow_data[workflow_data["type"]].get("use_placeholder", False) == True:
        workflow_data[workflow_data["type"]]["value"] = workflow_data[workflow_data["type"]].get("placeholder")



SYNC_STATES = {
    "form_sequence": form_sync,
    "named_entity_recognition": ner_sync,
}


def sync_workflow_task(workflow, task):
    if task.status != "completed":
        updated_data = []
        for workflow_data, task_data in iterate_matching(workflow.data, task.data):
            final_data = copy.deepcopy(workflow_data)
            if task_data:
                SYNC_STATES.get(final_data["type"], default_data_sync)(
                    final_data, task_data
                )
            updated_data.append(final_data)
        task.data = data_validation(updated_data)
