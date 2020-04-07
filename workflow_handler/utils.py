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
            "" if len(potential_input_value) == 0 else potential_input_value[0]
        )
        if "layout" in workflow_input:
            final_input["layout"] = workflow_input["layout"]
        inputs.append(final_input)
    task.inputs = inputs
    if task.outputs != workflow.outputs:
        task.outputs = workflow.outputs
        task.save()
