import copy

from .data_validation import data_validation

"""
Every time a task is fetched, we have to merge the task's data values with the workflow object.
We store these separately because a workflow's blocks configuration can change.
If it does, we want to reflect these changes on any task that is not completed.

The entry function is sync_workflow_task and should only be called by
those endpoints which are meant to return a non-complete task and
such task should not be persisted to the DB post-sync.
"""


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
    if task_data is None:
        return
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
    # Value gets cloned if it exists, otherwise we don't set it at all
    # Setting value to null breaks the frontend
    if task_data is not None and "value" in task_data[workflow_data["type"]]:
        workflow_data[workflow_data["type"]]["value"] = task_data[
            task_data["type"]
        ].get("value")

    # If the user wants to use the placeholder and value is null
    if (
        workflow_data[workflow_data["type"]].get("value") is None
        and workflow_data[workflow_data["type"]].get("use_placeholder", False) is True
    ):
        workflow_data[workflow_data["type"]]["value"] = workflow_data[
            workflow_data["type"]
        ].get("placeholder")

    # Entities always gets cloned
    workflow_data[workflow_data["type"]]["entities"] = (
        task_data[task_data["type"]].get("entities", [])
        if task_data is not None
        else []
    )


def bb_sync(workflow_data, task_data):
    # Check task_data has the right format, and set it to the right empty state if not
    if (
        isinstance(task_data, dict) is False
        or isinstance(task_data.get(workflow_data["type"]), dict) is False
        or isinstance(task_data[workflow_data["type"]].get("value"), dict) is False
    ):
        # task_data has no useful data, assume it's empty
        # Initialize value object
        workflow_data[workflow_data["type"]]["value"] = {}

        # Intiialize image to null or placeholder
        workflow_data[workflow_data["type"]]["value"]["image"] = (
            workflow_data[workflow_data["type"]]["placeholder"]
            if workflow_data[workflow_data["type"]].get("use_placeholder", False)
            else None
        )

        # Initialize object list
        workflow_data[workflow_data["type"]]["value"]["objects"] = []

    else:
        # Initialize "value" - wf should never have value
        workflow_data[workflow_data["type"]]["value"] = {}

        # Set image to value or fallback to placeholder or null
        workflow_data[workflow_data["type"]]["value"]["image"] = (
            task_data[workflow_data["type"]]["value"]["image"]
            if task_data[workflow_data["type"]]["value"].get("image") is not None
            else (
                workflow_data[workflow_data["type"]]["placeholder"]
                if workflow_data[workflow_data["type"]].get("use_placeholder", False)
                else None
            )
        )

        # Set objects
        workflow_data[workflow_data["type"]]["value"]["objects"] = task_data[
            workflow_data["type"]
        ]["value"].get("objects", [])


def default_data_sync(workflow_data, task_data):
    workflow_data[workflow_data["type"]]["value"] = (
        task_data[task_data["type"]].get("value", None)
        if task_data is not None
        else None
    )
    if (
        workflow_data[workflow_data["type"]]["value"] is None
        and workflow_data[workflow_data["type"]].get("use_placeholder", False) is True
    ):
        workflow_data[workflow_data["type"]]["value"] = workflow_data[
            workflow_data["type"]
        ].get("placeholder")


SYNC_STATES = {
    "form_sequence": form_sync,
    "named_entity_recognition": ner_sync,
    "bounding_boxes": bb_sync,
}


def sync_workflow_task(workflow, task):
    # retrieve(task)  # move to new fn which also fetches task?
    if task.status != "completed":
        updated_data = []
        for workflow_data, task_data in iterate_matching(workflow.data, task.data):
            final_data = copy.deepcopy(workflow_data)
            SYNC_STATES.get(final_data["type"], default_data_sync)(
                final_data, task_data
            )
            updated_data.append(final_data)
        task.data = data_validation(updated_data)
