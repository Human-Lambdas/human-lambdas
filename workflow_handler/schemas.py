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
                "single_selection",
                "multiple_selection",
            ),
            Optional(
                Or(
                    "binary",
                    "text",
                    "number",
                    "date",
                    "single_selection",
                    "multiple_selection",
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
                "single_selection",
                "multiple_selection",
            ),
            Optional(
                Or(
                    "binary",
                    "text",
                    "number",
                    "date",
                    "single_selection",
                    "multiple_selection",
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


DATA_SCHEMA = Schema(
    [
        {
            "id": Or(And(str, len), int),
            "name": And(str, len),
            "type": Or(
                "binary",
                "text",
                "number",
                "date",
                "image",
                "audio",
                "video",
                "list",
                "single_selection",
                "multiple_selection",
            ),
            Optional("layout"): dict,
            Optional(
                Or(
                    "binary",
                    "text",
                    "number",
                    "date",
                    "image",
                    "audio",
                    "video",
                    "list",
                    "single_selection",
                    "multiple_selection",
                ),
            ): {
                Optional("placeholder"): Or(str, float, int, bool, list),
                Optional("read_only"): bool,
                Optional("subtype"): And(str, len),
                Optional("value"): Or(
                    bool, And(str, len), And(list, len), float, int, None
                ),
                Optional("options"): list,
            },
            Optional("logic_jump"): dict,
        }
    ],
    ignore_extra_keys=True,
)
