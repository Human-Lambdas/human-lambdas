def sync_workflow_task(workflow, task):
    if task.outputs != workflow.outputs:
        task.outputs = workflow.outputs
        task.save()
