import copy


def list_int2ext(int_data):
    # TODO: validate (isinstance(int_data["value"], list))
    return [
        ivalue["value"] if isinstance(ivalue, dict) else ivalue
        for ivalue in int_data["value"]
    ]


def form_int2ext(int_data):
    data = int_data.get("data")  # TODO:validate
    return {idata["id"]: idata[idata["type"]]["value"] for idata in data}


def ner_int2ext(int_data):
    int_value = default_int2ext(int_data)
    return {"text": int_value, "entities": int_data["entities"]}  # TODO: validate


def default_int2ext(int_data):
    return int_data["value"]  # TODO: validate


TRANSFORM_INT2EXT_STATES = {
    "list": list_int2ext,
    "form_sequence": form_int2ext,
    "named_entity_recognition": ner_int2ext,
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
    task_data[task_data["type"]]["value"] = request_data[
        task_data["id"]
    ]  # TODO: validation


def list_ext2int(task_data, request_data):
    # TODO: validation
    if task_data[task_data["type"]]["subtype"] == "number":
        input_value = [float(i) for i in request_data[task_data["id"]]]
    else:
        input_value = request_data[task_data["id"]]
    task_data[task_data["type"]]["value"] = input_value


def form_ext2int(task_data, request_data):
    # TODO: validate ("data" in task_data[task_data["type"]])
    for fs_data in task_data[task_data["type"]]["data"]:
        fs_data[fs_data["type"]]["value"] = request_data[task_data["id"]].get(
            fs_data["id"], None
        )


def ner_ext2int(task_data, request_data):
    # TODO: validate (task_data["type"] == "named_entity_recognition")
    task_data[task_data["type"]]["value"] = request_data[task_data["id"]]["text"]
    task_data[task_data["type"]]["entities"] = request_data[task_data["id"]]["entities"]


TRANSFORM_EXT2INT_STATES = {
    "list": list_ext2int,
    "form_sequence": form_ext2int,
    "named_entity_recognition": ner_ext2int,
}


def transform_ext2int(workflow_data, request_data):
    formatted_data = []
    for w_data in workflow_data:
        task_data = copy.deepcopy(w_data)
        # remove layout since it should not be included in tasks
        if "layout" in task_data:
            del task_data["layout"]

        # if there are any cases left which do not include the type data
        if task_data["type"] not in task_data:
            task_data[task_data["type"]] = {}
        if w_data["id"] in request_data:
            TRANSFORM_EXT2INT_STATES.get(w_data["type"], default_ext2int)(
                task_data, request_data
            )
        else:
            task_data[task_data["type"]]["value"] = None
        formatted_data.append(task_data)
    return formatted_data
