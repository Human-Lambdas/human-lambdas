from schema import Schema, And, Or, Optional


WORKFLOW_INPUT_SCHEMA = Schema(
    [
        {
            "id": And(str, len),
            "name": And(str, len),
            "type": Or("text", "image", "number", "date", "audio", "video", "list"),
            Optional("layout"): dict,
            Optional("subtype"): And(str, len),
        }
    ],
    ignore_extra_keys=True,
)

TASK_INPUT_SCHEMA = Schema(
    [
        {
            "id": And(str, len),
            "name": And(str, len),
            "type": Or("text", "image", "number", "date", "audio", "video", "list"),
            Optional("layout"): dict,
            Optional("subtype"): And(str, len),
            "value": Or(str, int, float, list),
        }
    ],
    ignore_extra_keys=True,
)


OUTPUT_SCHEMA = Schema(
    [
        {
            "id": And(str, len),
            "name": And(str, len),
            "type": Or(
                "binary",
                "text",
                "number",
                "date",
                "single-selection",
                "multiple-selection",
            ),
            Optional(
                Or(
                    "binary",
                    "text",
                    "number",
                    "date",
                    "single-selection",
                    "multiple-selection",
                )
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
            "type": Or(
                "binary",
                "text",
                "number",
                "date",
                "single-selection",
                "multiple-selection",
            ),
            Optional(
                Or(
                    "binary",
                    "text",
                    "number",
                    "date",
                    "single-selection",
                    "multiple-selection",
                )
            ): {
                Optional("value"): Or(bool, And(str, len), And(list, len), float, int),
                Optional("options"): list,
            },
            Optional("logicJump"): dict,
        }
    ],
    ignore_extra_keys=True,
)
