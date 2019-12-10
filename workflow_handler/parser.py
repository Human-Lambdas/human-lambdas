import csv


def validate_keys(csv_file, workflow):
    dataset = csv.reader(csv_file)
    title_row = next(dataset)
    for input in workflow["inputs"]:
        value_count = title_row.count(input["key"])
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
            for input in workflow["inputs"]:
                task.append(
                    {
                        "key": input["key"],
                        "name": input["name"],
                        "format": input["format"],
                        "value": row[title_row.index(input["key"])],
                    }
                )

        tasks.append(task)
    return tasks
