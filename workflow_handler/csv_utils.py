import copy
import csv
from ast import literal_eval

from django.db.models import F
from django.http import HttpResponse
from user_handler.notifications import send_notification

from .models import Task, TaskActivity


def process_list(input_value):
    return literal_eval(input_value)


process_input = {
    "list": process_list,
}


def validate_keys(title_row, workflow):
    for winput in workflow.inputs:
        value_count = title_row.count(winput["id"])
        if value_count > 1:
            raise Exception("There are duplicate column names")
        if value_count == 0:
            raise Exception("The dataset is missing some columns")


def extract_value(w_data, row, title_row):
    data_item = copy.deepcopy(w_data)
    if "layout" in data_item:
        del data_item["layout"]
    if data_item["id"] in title_row:
        input_value = row[title_row.index(data_item["id"])]
        if data_item["type"] in process_input:
            input_value = process_input[data_item["type"]](input_value)
        data_item[data_item["type"]]["value"] = input_value
    return data_item


def process_csv(csv_file, workflow, source, user, filename):
    dataset = csv.reader(csv_file)
    title_row = next(dataset)
    validate_keys(title_row, workflow)
    for row in dataset:
        data = [extract_value(w_input, row, title_row) for w_input in workflow.data]
        task = Task(data=data, workflow=workflow, source=source)
        task.save()
        TaskActivity(
            task=task,
            source="csv",
            filename=filename,
            created_by=user,
            action="created",
        ).save()
        workflow.n_tasks = F("n_tasks") + 1
        workflow.save()
    send_notification(workflow)


def task_list_to_csv_response(task_list):
    workflow = task_list[0].workflow
    response = HttpResponse(content_type="text/csv")
    response[
        "Content-Disposition"
    ] = 'attachment; filename="workflow_{0}_completed_tasks.csv"'.format(workflow.id)
    writer = csv.writer(response)
    headers = [task_data["id"] for task_data in workflow.data]
    writer.writerow(headers)
    for task in task_list:
        writer.writerow(
            [
                next(
                    (
                        task_data[task_data["type"]]["value"]
                        for task_data in task.data
                        if task_data["id"] == workflow_data["id"]
                        and "value" in task_data[task_data["type"]]
                    ),
                    None,
                )
                for workflow_data in workflow.data
            ]
        )
    return response
