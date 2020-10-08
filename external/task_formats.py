def process_output_value(output):
    output_value = output.get("value")
    if isinstance(output_value, list):
        return [
            ioutput["value"] if isinstance(ioutput, dict) else ioutput
            for ioutput in output_value
        ]
    if not output_value:
        data = output.get("data", [])
        output_value = {idata["id"]: idata[idata["type"]]["value"] for idata in data}
    return output_value


def process_external_completed_tasks(data):
    data["data"] = {
        d_output["id"]: process_output_value(d_output.get(d_output["type"], {}))
        for d_output in data["data"]
    }
    return data
