import os

import requests
import sentry_sdk

HL_API_KEY = os.environ["HL_API_KEY"]
SENTRY_KEY = os.environ["SENTRY_KEY"]
SENTRY_PROJECT = os.environ["SENTRY_PROJECT"]

sentry_sdk.init(
    dsn="https://{0}@sentry.io/{1}".format(SENTRY_KEY, SENTRY_PROJECT),
)


def relayer(request):
    # Parse payload
    data = request.json["data"]

    # Extract data to relay
    text = data["transcript"]["text"]
    entities = data["transcript"]["entities"]

    # Process relevant data
    excerpts = "\n".join([text[e["start"] : e["end"]] for e in entities])

    # Post data to next step
    r = requests.post(
        "https://api.humanlambdas.com/orgs/9/workflows/341/tasks/create",
        headers={"Authorization": f"Token {HL_API_KEY}"},
        json={"data": {"excerpts": excerpts}},
    )

    # Log response
    print(f"Status Code: {r.status_code}")
    print(f"Response Body: {r.json()}")

    return "OK"
