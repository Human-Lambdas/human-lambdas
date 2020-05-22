from schema import Schema, And, Or, Optional


WORKFLOW_INPUT_SCHEMA = Schema(
    [
        {
            "id": And(str, len),
            "name": And(str, len),
            "type": Or("text", "image", "number", "date", "audio", "video"),
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
            "type": Or("text", "image", "number", "date", "audio", "video"),
            Optional("layout"): dict,
            "value": str,
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
            Optional("logicJump"): dict,
        }
    ],
    ignore_extra_keys=True,
)

UPDATE_OUTPUT_SCHEMA = Schema(
    [
        {
            "id": And(str, len),
            "name": And(str, len),
            "type": Or("binary", "text", "single-selection", "multiple-selection"),
            Optional(Or("binary", "text", "single-selection", "multiple-selection")): {
                Optional("value"): Or(bool, And(str, len), And(list, len)),
                Optional("options"): list,
            },
            Optional("logicJump"): dict,
        }
    ],
    ignore_extra_keys=True,
)
