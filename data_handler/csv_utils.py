import copy
import csv
import json
import re

from django.db.models import F
from django.http import HttpResponse

from user_handler.notifications import send_notification
from workflow_handler.models import Task, TaskActivity

from .data_validation import data_validation


# TO-DO: modify to accept sub-keys for NER
def validate_keys(title_row, workflow):
    for winput in workflow.inputs:
        # NER supports two mutually exclusive formats:
        # 1) A column with the identifier with full support for the NER JSON format
        # 2) A column with the identifier and the text sub-key as a short-hand to supply input text
        if winput.get("type") == "named_entity_recognition":
            # Case 1: Validate key name
            value_count = title_row.count(winput["id"])
            # Case 2: Validate text subkey
            if f'{winput["id"]}.text' in title_row:
                value_count += 1
            # Raise exception if it has neither or both
            if value_count > 1:
                raise Exception("There are duplicate column names")
        else:
            value_count = title_row.count(winput["id"])
            if value_count > 1:
                raise Exception("There are duplicate column names")
            # TO-DO: Do we need this check? It should be fine to supply an incomplete task
            if value_count == 0:
                raise Exception("The dataset is missing some columns")


def clean_str_json(input_value):
    # Handle emptiness
    if len(input_value) < 1:
        return "{}"
    # Handle wrapping single quotes, which could be part of the CSV but make JSON parsing fail
    if re.match(r"^[\'].*[\']$", input_value):
        return input_value[1:-1]
    # Otherwise return original
    return input_value


# NER is a special case since it follows a different set of conventions
def extract_ner(data_item, row, title_row):
    # NER standard case
    if data_item["id"] in title_row:
        if title_row.index(data_item["id"]) < len(row):
            input_value = row[title_row.index(data_item["id"])]
            try:
                json_value = json.loads(clean_str_json(input_value))
            except:
                raise Exception(f'Column {data_item["id"]} is not a valid JSON')
            data_item[data_item["type"]]["value"] = json_value.get("text", "")
            data_item[data_item["type"]]["entities"] = json_value.get("entities", [])

    # NER special case where the `text` sub-key is included
    if f'{data_item["id"]}.text' in title_row:
        if title_row.index(f'{data_item["id"]}.text') < len(row):
            input_value = row[title_row.index(f'{data_item["id"]}.text')]
            data_item[data_item["type"]]["value"] = input_value


# TO-DO: modify to accept sub-keys for NER
def extract_value(w_data, row, title_row):
    data_item = copy.deepcopy(w_data)
    if "layout" in data_item:
        del data_item["layout"]
    if data_item["type"] == "named_entity_recognition":
        extract_ner(data_item, row, title_row)
        return data_item
    if data_item["id"] in title_row:
        if title_row.index(data_item["id"]) < len(row):
            input_value = row[title_row.index(data_item["id"])]
            data_item[data_item["type"]]["value"] = input_value
    return data_item


def process_csv(csv_file, workflow, source, user, filename):
    dataset = csv.reader(csv_file)
    title_row = next(dataset)
    validate_keys(title_row, workflow)
    for row in dataset:
        data = [extract_value(w_input, row, title_row) for w_input in workflow.data]
        task = Task(data=data_validation(data), workflow=workflow, source=source)
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
