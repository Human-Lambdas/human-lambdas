import csv

from .models import Task


def validate_keys(title_row, workflow):
    for input in workflow.inputs:
        value_count = title_row.count(input["key"])
        if value_count > 1:
            raise Exception("There are duplicate column names")

        if value_count == 0:
            raise Exception("The dataset is missing some columns")


def process_csv(csv_file, workflow):
    dataset = csv.reader(csv_file)
    title_row = next(dataset)
    validate_keys(title_row, workflow)
    tasks = []
    for ic, row in enumerate(dataset):
        if row == title_row:
            continue
        else:
            task_name = "{0}_{1}".format(workflow.name, ic)
            tasks = []
            for input in workflow.inputs:
                tasks.append(
                    {
                        "key": input["key"],
                        "name": input["name"],
                        "format": input["format"],
                        "value": row[title_row.index(input["key"])],
                    }
                )
        task_obj = Task(name=task_name, input_data=tasks, workflow=workflow)
        task_obj.save()
