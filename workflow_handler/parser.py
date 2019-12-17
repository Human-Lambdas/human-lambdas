import csv

from .models import Task


def validate_keys(csv_file, workflow):
    dataset = csv.reader(csv_file)
    title_row = next(dataset)
    for value in workflow.inputs:
        value_count = title_row.count(value["key"])
        if value_count > 1:
            raise Exception("There are duplicate column names")

        if value_count == 0:
            raise Exception("The dataset is missing some columns")


def format_csv(csv_file, workflow):
    dataset = csv.reader(csv_file)
    title_row = next(dataset)
    tasks = []
    for row in dataset:
        if row == title_row:
            continue
        else:
            task = []
            for workflow_input in workflow.inputs:
                task.append({
                    "key": workflow_input["key"],
                    "name": workflow_input["name"],
                    "format": workflow_input["format"],
                    "value": row[title_row.index(workflow_input["key"])],
                    "workflow": workflow
                })

        tasks.append(task)
    return tasks


def create_tasks(tasks, workflow):
    for task in tasks:
        input_data = []
        for field in task:
            if workflow == field["workflow"]:
                task_input = {field["key"]: field["value"]}
                input_data.append(task_input)
            else:
                raise Exception("The task's workflow does not match the workflow provided")
        name = "%s_task_%d" % (workflow.organization, workflow.id)

        new_task = Task(name=name, workflow=workflow, input_data=input_data, output_data={})
        new_task.save()