import copy

"""
Transformations handle internal<>external conversions.

external->internal is most important because we want to avoid garbage entering the system.
Still, there's a validation stage after this, so we don't need to validate here.
The goal is to pick up any relevant data that's meaningful for the type in question
"""


def list_int2ext(int_data):
    return [
        ivalue["value"] if isinstance(ivalue, dict) else ivalue
        for ivalue in int_data["value"]
    ]


def form_int2ext(int_data):
    data = int_data.get("data")
    return {idata["id"]: idata[idata["type"]]["value"] for idata in data}


def ner_int2ext(int_data):
    int_value = default_int2ext(int_data)
    entities = []
    for entity in int_data["entities"]:
        entity["category"] = entity["tag"]
        del entity["tag"]
        if "text" in entity:
            del entity["text"]
        if "color" in entity:
            del entity["color"]
        entities.append(entity)
    return {"text": int_value, "entities": entities}


def bounding_boxes_int2ext(int_data):
    # Parse 'value'
    int_value = default_int2ext(int_data)

    # Guarantee 'objects' exists
    int_value["objects"] = int_value.get("objects", [])

    # Convert percent to decimal percentage representation
    for i, obj in enumerate(int_value["objects"]):
        obj["x"] = round(obj["x"] / 100, 4)
        obj["y"] = round(obj["y"] / 100, 4)
        obj["w"] = round(obj["w"] / 100, 4)
        obj["h"] = round(obj["h"] / 100, 4)
        int_value["objects"][i] = obj
    return int_value


def default_int2ext(int_data):
    return int_data.get("value")


TRANSFORM_INT2EXT_STATES = {
    "list": list_int2ext,
    "form_sequence": form_int2ext,
    "named_entity_recognition": ner_int2ext,
    "bounding_boxes": bounding_boxes_int2ext,
}


def transform_int2ext(data):  # rename: transform_int2ext
    data = {
        idata["id"]: TRANSFORM_INT2EXT_STATES.get(idata["type"], default_int2ext)(
            idata.get(idata["type"], {})
        )
        for idata in data
    }
    return data


# Transforming external to internal
def default_ext2int(task_data, request_data):
    task_data[task_data["type"]]["value"] = request_data[task_data["id"]]


def list_ext2int(task_data, request_data):
    if task_data[task_data["type"]]["subtype"] == "number":
        input_value = [float(i) for i in request_data[task_data["id"]]]
    else:
        input_value = request_data[task_data["id"]]
    task_data[task_data["type"]]["value"] = input_value


def form_ext2int(task_data, request_data):
    for fs_data in task_data[task_data["type"]]["data"]:
        fs_data[fs_data["type"]]["value"] = request_data[task_data["id"]].get(
            fs_data["id"], None
        )


def ner_ext2int(task_data, request_data):
    # Special case: accept string as its value
    if isinstance(request_data[task_data["id"]], str):
        task_data[task_data["type"]]["value"] = request_data[task_data["id"]]
        task_data[task_data["type"]]["entities"] = []
        return
    # Normal case: standard NER schema
    if (
        not isinstance(request_data[task_data["id"]], dict)
        or "text" not in request_data[task_data["id"]]
    ):
        return
    task_data[task_data["type"]]["value"] = request_data[task_data["id"]]["text"]
    entities = []
    for entity in request_data[task_data["id"]].get("entities", []):
        if "category" in entity:
            entity["tag"] = entity["category"]
            del entity["category"]
        # if it doesn't have 'category' or 'start' or 'end' data validation will fail later on
        entities.append(entity)
    task_data[task_data["type"]]["entities"] = entities


def bounding_boxes_ext2int(task_data, request_data):
    # Try to extract data if value has the right format
    if isinstance(request_data[task_data["id"]], dict):
        task_data[task_data["type"]]["value"] = {}
        task_data[task_data["type"]]["value"]["image"] = request_data[
            task_data["id"]
        ].get("image")
        task_data[task_data["type"]]["value"]["objects"] = request_data[
            task_data["id"]
        ].get("objects", [])
        for i in range(len(task_data[task_data["type"]]["value"]["objects"])):
            obj = task_data[task_data["type"]]["value"]["objects"][i]
            obj["x"] = (
                round(obj["x"] * 100, 2)
                if isinstance(obj.get("x"), (int, float))
                else obj.get("x")
            )
            obj["y"] = (
                round(obj["y"] * 100, 2)
                if isinstance(obj.get("y"), (int, float))
                else obj.get("y")
            )
            obj["w"] = (
                round(obj["w"] * 100, 2)
                if isinstance(obj.get("w"), (int, float))
                else obj.get("w")
            )
            obj["h"] = (
                round(obj["h"] * 100, 2)
                if isinstance(obj.get("h"), (int, float))
                else obj.get("h")
            )
            task_data[task_data["type"]]["value"]["objects"][i] = obj


TRANSFORM_EXT2INT_STATES = {
    "list": list_ext2int,
    "form_sequence": form_ext2int,
    "named_entity_recognition": ner_ext2int,
    "bounding_boxes": bounding_boxes_ext2int,
}


def transform_ext2int(workflow_data, request_data):
    formatted_data = []
    for w_data in workflow_data:
        task_data = copy.deepcopy(w_data)
        # remove layout since it should not be included in tasks
        if "layout" in task_data:
            del task_data["layout"]

        # if there are any cases left which do not include the type data
        if isinstance(task_data.get("type"), dict):
            task_data[task_data["type"]] = {}
        if w_data["id"] in request_data:
            TRANSFORM_EXT2INT_STATES.get(w_data["type"], default_ext2int)(
                task_data, request_data
            )
        else:
            task_data[task_data["type"]]["value"] = None
        formatted_data.append(task_data)
    return formatted_data
