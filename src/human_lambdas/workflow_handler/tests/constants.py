from typing_extensions import Final

ALPHA: Final = {
    "id": "Alpha",
    "name": "alpha",
    "type": "text",
    "text": {"read_only": True},
}
BETA: Final = {
    "id": "Beta",
    "name": "beta",
    "type": "text",
    "text": {"read_only": True},
}
GAMMA: Final = {
    "id": "Gamma",
    "name": "gamma",
    "type": "text",
    "text": {"read_only": True},
}

DELTA: Final = {
    "id": "foo",
    "name": "foo",
    "type": "text",
    "text": {"read_only": True},
}
WORKFLOW_DATA: Final = {
    "name": "foowf",
    "is_running": False,
    "task_description": None,
    "guidelines_url": None,
    "pinned_block": None,
    "data": [
        {
            "id": "foo",
            "name": "foo",
            "type": "text",
            "text": {"read_only": True},
        },
        {
            "id": "foo",
            "name": "foo",
            "type": "single_selection",
            "single_selection": {"options": ["foo1", "bar1"]},
        },
    ],
}

WORKFLOW_DATA_2: Final = {
    "name": "uploader",
    "data": [
        {
            "id": "news",
            "name": "news",
            "type": "text",
            "layout": {},
            "text": {"read_only": True},
        },
        {
            "id": "type",
            "name": "type",
            "type": "text",
            "layout": {},
            "text": {"read_only": True},
        },
        {
            "id": "foo",
            "name": "foo",
            "type": "single_selection",
            "single_selection": {"options": ["foo1", "bar1"]},
        },
    ],
}

WORKFLOW_DATA_3: Final = {
    "name": "uploader",
    "data": [
        ALPHA,
        BETA,
        GAMMA,
        {
            "id": "foo",
            "name": "foo",
            "type": "single_selection",
            "single_selection": {
                "options": [
                    {"id": "foo2", "name": "foo2"},
                    {"id": "bar2", "name": "bar2"},
                ],
            },
        },
    ],
}

SUPER_ADMIN_REGISTRATION_DATA: Final = {
    "email": "sa@bar.com",
    "password": "foowordbar",
    "organization": "staff",
    "name": "sa",
}
REGISTRATION_DATA: Final = {
    "email": "foo@bar.com",
    "password": "foowordbar",
    "organization": "fooInc",
    "name": "foo",
}

REGISTRATION_DATA_2: Final = {
    "email": "foojr@bar.com",
    "password": "foowordbar",
    "organization": "fooInc",
    "name": "foo",
}

REGISTRATION_DATA_3: Final = {
    "email": "bar@bar.com",
    "password": "foowordbar",
    "organization": "barInc",
    "name": "bar",
}

INTERNAL_WORKER_REGISTRATION_DATA: Final = {
    "email": "iw@bar.com",
    "password": "foowordbar",
    "organization": "staff",
    "name": "sa",
}

TASK_DESCRIPTION = "lkjh"
GUIDELINES_URL = "https://asdf.asdf"
