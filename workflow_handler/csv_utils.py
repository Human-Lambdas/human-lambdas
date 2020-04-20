import csv
import copy
import io

from django.db.models import F

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


def task_list_to_csv_string(task_list):
    empty_csv = io.StringIO()
    writer = csv.writer(empty_csv, quoting=csv.QUOTE_NONNUMERIC)
    title_passed = False
    for task in task_list:
        print(task.__dict__)
        if title_passed is True:
            writer.writerow([task_input["value"] for task_input in task.inputs])
        else:
            writer.writerow([task_input["id"] for task_input in task.inputs])
            writer.writerow([task_input["value"] for task_input in task.inputs])
            title_passed = True
    print(empty_csv.getvalue())
    string_to_return = repr(empty_csv.getvalue())
    # print(string_to_return)
    return string_to_return
