from schema import Schema, And, Or, Optional


WORKFLOW_INPUT_SCHEMA = Schema(
    [
        {
            "id": And(str, len),
            "name": And(str, len),
            "type": Or("text", "image"),
            Optional("layout"): dict,
        }
    ],
    ignore_extra_keys=True,
)

TASK_INPUT_SCHEMA = Schema(
    [
        {
            "id": And(str, len),
            "name": And(str, len),
            "type": Or("text", "image"),
            Optional("layout"): dict,
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
            Optional(
                Or("binary", "text", "single-selection", "multiple-selection")
            ): dict,
        }
    ],
    ignore_extra_keys=True,
)

UPDATE_OUTPUT_SCHEMA = Schema(
    [
        {
            "id": And(str, len),
            Or("binary", "text", "single-selection", "multiple-selection"): {
                "value": Or(bool, And(str, len), And(list, len))
            },
        }
    ],
    ignore_extra_keys=True,
)
