import csv
import copy

from django.db.models import F
from django.http import HttpResponse

from .models import Task


def validate_keys(title_row, workflow):
    for input in workflow.inputs:
        value_count = title_row.count(input["id"])
        if value_count > 1:
            raise Exception("There are duplicate column names")

        if value_count == 0:
            raise Exception("The dataset is missing some columns")


def process_csv(csv_file, workflow):
    dataset = csv.reader(csv_file)
    title_row = next(dataset)
    validate_keys(title_row, workflow)
    task_counter = 0
    for ic, row in enumerate(dataset):
        if row == title_row:
            continue
        else:
            inputs = []
            for input in workflow.inputs:
                inputs.append(
                    {
                        "id": input["id"],
                        "name": input["name"],
                        "type": input["type"],
                        "value": row[title_row.index(input["id"])],
                    }
                )
        task_obj = Task(
            inputs=inputs, outputs=copy.deepcopy(workflow.outputs), workflow=workflow
        )
        task_obj.save()
        task_counter += 1
    workflow.n_tasks = F("n_tasks") + task_counter
    workflow.save()


def task_list_to_csv_response(task_list):
    workflow = task_list[0].workflow
    response = HttpResponse(content_type="text/csv")
    response[
        "Content-Disposition"
    ] = 'attachment; filename="workflow_{0}_completed_tasks.csv"'.format(workflow.id)
    writer = csv.writer(response)
    headers = [task_input["id"] for task_input in workflow.inputs] + [
        task_output["id"] for task_output in workflow.outputs
    ]
    writer.writerow(headers)
    for task in task_list:
        writer.writerow(
            [
                next(
                    (
                        task_input["value"]
                        for task_input in task.inputs
                        if task_input["id"] == workflow_input["id"]
                    ),
                    None,
                )
                for workflow_input in workflow.inputs
            ]
            + [
                next(
                    (
                        task_output[task_output["type"]]["value"]
                        for task_output in task.outputs
                        if task_output["id"] == workflow_output["id"]
                    ),
                    None,
                )
                for workflow_output in workflow.outputs
            ]
        )
    return response
