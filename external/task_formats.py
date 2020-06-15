def process_output_value(output_value):
    if isinstance(output_value, list):
        return [
            ioutput["value"] if isinstance(ioutput, dict) else ioutput
            for ioutput in output_value
        ]
    return output_value


def process_external_completed_tasks(data):
    data["inputs"] = {d_input["id"]: d_input["value"] for d_input in data["inputs"]}
    data["outputs"] = {
        d_output["id"]: process_output_value(
            d_output.get(d_output["type"], {}).get("value")
        )
        for d_output in data["outputs"]
    }
    return data
