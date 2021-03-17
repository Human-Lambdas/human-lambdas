WORKFLOW_DATA = {
    "name": "foowf",
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

ALPHA = {
    "id": "Alpha",
    "name": "alpha",
    "type": "text",
    "text": {"read_only": True},
}
BETA = {
    "id": "Beta",
    "name": "beta",
    "type": "text",
    "text": {"read_only": True},
}
GAMMA = {
    "id": "Gamma",
    "name": "gamma",
    "type": "text",
    "text": {"read_only": True},
}

SUPER_ADMIN_REGISTRATION_DATA = {
    "email": "sa@bar.com",
    "password": "foowordbar",
    "organization": "staff",
    "name": "sa",
}


INTERNAL_WORKER_REGISTRATION_DATA = {
    "email": "iw@bar.com",
    "password": "foowordbar",
    "organization": "staff",
    "name": "sa",
}
