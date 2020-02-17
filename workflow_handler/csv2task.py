import csv
import copy

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
    task_counter = workflow.n_tasks
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
    workflow.n_tasks = task_counter
    workflow.save()
