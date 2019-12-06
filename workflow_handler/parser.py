import csv

def validateKeys(csv_name, workflow):
        dataset = csv.reader(file)
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

# CSV
# alpha,beta,gamma,delta
# a,b,c,d
# e,f,g,h
# bernat,sean,james,matteus

#- Process the CSV and create dicts in the format of the workflow

# name folder parsing


def format_csv(file, workflow):
        dataset = csv.reader(file)
        title_row = next(dataset)
        tasks = []

        for row in dataset:
            if row == title_row:
                continue # make note of pass vs continue
            else:
                task = []
                for i in workflow["inputs"]:
                    print(i)
                    task.append({
                        "key": i["key"],
                        "name": i["name"],
                        "format": i["format"]
                        "value": row[title_row.index(i["key"])]
                    })
            
            tasks.append(task)
        print(tasks)

with open("current.csv", newline='') as file:
    validateKeys("current.csv", sample_workflow)

with open("current.csv", newline='') as file:
    format_csv(file, sample_workflow)