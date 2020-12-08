def process_output_value(output):
    output_value = output.get("value")
    # Special Case: List
    if isinstance(output_value, list):
        return [
            ioutput["value"] if isinstance(ioutput, dict) else ioutput
            for ioutput in output_value
        ]
    # Special Case: Form
    if not output_value and "data" in output:
        data = output.get("data")
        output_value = {idata["id"]: idata[idata["type"]]["value"] for idata in data}
    # Special Case: Named entity recognition
    if "entities" in output:
        output_value = {"text": output["value"], "entities": output["entities"]}
    return output_value


def process_external_completed_tasks(data):
    data["data"] = {
        d_output["id"]: process_output_value(d_output.get(d_output["type"], {}))
        for d_output in data["data"]
    }
    return data
