from schema import And, Optional, Or, Schema

_DATA_TYPES = Or(
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
    "form_sequence",
    "email",
    "link",
    "pdf",
    "embed",
    "named_entity_recognition",
)
DATA_SCHEMA = Schema(
    [
        {
            "id": Or(And(str, len), int),
            Optional("_id"): Or(And(str, len), int),
            "name": And(str, len),
            "type": _DATA_TYPES,
            Optional("layout"): dict,
            _DATA_TYPES: {
                Optional("placeholder"): Or(str, float, int, bool, list, None),
                Optional("read_only"): bool,
                Optional("is_required"): bool,
                Optional("subtype"): And(str, len),
                Optional("value"): Or(
                    bool, str, And(list, len), float, int, dict, None
                ),
                Optional("entities"): list,
                Optional("options"): list,
                Optional("data"): list,
                Optional("history"): list,
            },
            Optional("logic_jump"): dict,
        }
    ],
    ignore_extra_keys=True,
)
