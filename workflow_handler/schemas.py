from schema import Schema, And, Or


WORKFLOW_INPUT_SCHEMA = Schema(
    [{"id": And(str, len), "name": And(str, len), "type": Or("text", "image")}],
    ignore_extra_keys=True,
)

TASK_INPUT_SCHEMA = Schema(
    [
        {
            "id": And(str, len),
            "name": And(str, len),
            "type": Or("text", "image"),
            "value": And(str, len),
        }
    ],
    ignore_extra_keys=True,
)


OUTPUT_SCHEMA = Schema(
    [
        {
            "id": And(str, len),
            "name": And(str, len),
            "type": Or("binary", "text", "single-selection", "multiple-selection"),
            Or("binary", "text", "single-selection", "multiple-selection"): dict,
        }
    ],
    ignore_extra_keys=True,
)

UPDATE_OUTPUT_SCHEMA = Schema(
    {
        "outputs": [
            {
                "id": And(str, len),
                Or("binary", "text", "single-selection", "multiple-selection"): {
                    "value": And(str, len)
                },
            }
        ]
    },
    ignore_extra_keys=True,
)
