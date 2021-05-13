import ast
import copy
import csv
from typing import Optional

from django.db.models import F
from django.http import HttpResponse

from human_lambdas.user_handler.notifications import send_notification
from human_lambdas.workflow_handler.models import Task, TaskActivity

from .data_transformation import ner_ext2int, ner_int2ext
from .data_validation import data_validation


# NER supports two mutually exclusive formats:
# 1) A column with the identifier with full support for the NER JSON format
# 2) A column with the identifier and the text sub-key as a short-hand to supply input text
def validate_keys_ner(title_row, winput):
    # Case 1: Validate key name
    value_count = title_row.count(winput["id"])
    # Case 2: Validate text subkey
    if f'{winput["id"]}.text' in title_row:
        value_count += 1
    # Raise exception if it has neither or both
    if value_count > 1:
        raise Exception("There are duplicate column names")


def validate_keys(title_row, workflow):
    for winput in workflow.inputs:
        if winput.get("type") == "named_entity_recognition":
            validate_keys_ner(title_row, winput)
        else:
            value_count = title_row.count(winput["id"])
            if value_count > 1:
                raise Exception("There are duplicate column names")
            if value_count == 0:
                raise Exception("The dataset is missing some columns")


# NER is a special case since it follows a different set of conventions
def extract_ner(data_item, row, title_row):
    # NER standard case
    if data_item["id"] in title_row:
        if title_row.index(data_item["id"]) < len(row):
            input_value = row[title_row.index(data_item["id"])]
            try:
                # We expect an object containing NER properties, so we will need the AST parser
                ner_object = (
                    ast.literal_eval(input_value)
                    if len(input_value) > 0
                    else {"text": ""}
                )
            except (ValueError, SyntaxError):
                raise Exception(
                    f"The value provided is not in right format: {input_value}"
                )
            # We should have an object matching the external API representation
            # We can leverage the API transformer
            ner_ext2int(data_item, {data_item["id"]: ner_object})
            return data_item

    # NER special case where the `text` sub-key is included
    if f'{data_item["id"]}.text' in title_row:
        if title_row.index(f'{data_item["id"]}.text') < len(row):
            input_value = row[title_row.index(f'{data_item["id"]}.text')]
            data_item[data_item["type"]]["value"] = input_value

    return data_item


# Extract Python literals in number, list, object based types
def extract_literals(data_item, row, title_row):
    if data_item["id"] in title_row:
        if title_row.index(data_item["id"]) < len(row):
            input_value = row[title_row.index(data_item["id"])].strip()
            try:
                data_item[data_item["type"]]["value"] = (
                    ast.literal_eval(input_value) if len(input_value) > 0 else None
                )
            except (ValueError, SyntaxError):
                raise Exception(
                    f"The value provided is not in right format: {input_value}"
                )
    return data_item


LITERAL_TYPES = [
    "text_sequence",
    "multiple_selection",
    "number",
    "form_sequence",
    "bounding_boxes",
    "binary",
]


def extract_default(data_item, row, title_row):
    if data_item["id"] in title_row:
        if title_row.index(data_item["id"]) < len(row):
            input_value = row[title_row.index(data_item["id"])]
            data_item[data_item["type"]]["value"] = input_value
    return data_item


def extract_value(w_data, row, title_row):
    data_item = copy.deepcopy(w_data)
    if "layout" in data_item:
        del data_item["layout"]
    if data_item["type"] in LITERAL_TYPES:
        return extract_literals(data_item, row, title_row)
    if data_item["type"] == "named_entity_recognition":
        return extract_ner(data_item, row, title_row)
    else:
        return extract_default(data_item, row, title_row)


def process_csv(
    csv_file, workflow, source, user, filename, region: Optional[str] = None
):
    dataset = csv.reader(csv_file)
    title_row = next(dataset)
    validate_keys(title_row, workflow)
    for row in dataset:
        data = [extract_value(w_input, row, title_row) for w_input in workflow.data]
        task = Task(
            data=data_validation(data),
            workflow=workflow,
            source=source,
            region=None if region in ["EU", None] else region,
        )
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


def extract_value_csv_export(task_data):
    if task_data["type"] == "named_entity_recognition":
        return ner_int2ext(task_data[task_data["type"]])
    else:
        return task_data[task_data["type"]]["value"]


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
                        extract_value_csv_export(task_data)
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
