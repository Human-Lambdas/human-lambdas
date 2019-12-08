import csv
from io import StringIO

def validateKeys(csv_file, workflow):
        dataset = csv.reader(csv_file)
        title_row = next(dataset) # gets the first line

        for input in workflow["inputs"]:
            value_count = title_row.count(input["key"])

            if value_count > 1:
                raise Exception("There are duplicate column names")

            if value_count == 0:
                raise Exception("The dataset is missing some columns")
        print("This is valid")


sample_workflow = {
    'name': "<str>", 
    'description': "<str>", 
    'inputs': 
        [
            {
                "key": "alpha", 
                "name": "<str>", 
                "format": "<data-type>",
            },
                        {
                "key": "beta", 
                "name": "<str>", 
                "format": "<data-type>",
            },
                        {
                "key": "gamma", 
                "name": "<str>", 
                "format": "<data-type>",
            },
                        {
                "key": "delta", 
                "name": "<str>", 
                "format": "<data-type>",
            },  
        ], 
     'outputs': 
        [
            {
                "key": "<str>", 
                "name": "<str>", 
                "format": {"type": "<output-type>", "<output-type>": "[<str>, ...]"},  
            }, ...

        ]
}

def format_csv(file, workflow):
        dataset = csv.reader(file)
        title_row = next(dataset)
        tasks = []

        for row in dataset:
            if row == title_row:
                continue
            else:
                task = []
                for i in workflow["inputs"]:
                    task.append({
                        "key": i["key"],
                        "name": i["name"],
                        "format": i["format"],
                        "value": row[title_row.index(i["key"])]
                    })
            
            tasks.append(task)
        print(tasks)

test_csv_string = """alpha,beta,gamma,delta
1,2,3,4
5,6,7,8
"""

test_csv_file = StringIO(test_csv_string)

validateKeys(test_csv_file, sample_workflow)

# reset value of test_csv_file to stop function beginning on the second row
test_csv_file = StringIO(test_csv_string)

format_csv(test_csv_file, sample_workflow)
