from rest_framework.views import exception_handler
from rest_framework.exceptions import ErrorDetail


def process_errors(error):
    error_list = []
    if isinstance(error, list):
        for message in error:
            error_list.append({"message": message})
    else:
        detail = error.get("detail")
        if detail:
            error_list.append({"message": detail})
            messages = error.get("messages", [])
            for message in messages:
                error_list.append({"message": message})
        else:
            fields = error.keys()
            for field in fields:
                if not isinstance(field, ErrorDetail):
                    if isinstance(error[field], dict):
                        inner_fields = error[field].keys()
                        for inner_field in inner_fields:
                            for message in error[field][inner_field]:
                                error_object = {
                                    "field": f"{field}-->{inner_field}",
                                    "message": message,
                                }
                                error_list.append(error_object)
                else:
                    for message in error[field]:
                        error_object = {"field": field, "message": message}
                        error_list.append(error_object)
    return error_list


def custom_exception_handler(exc, context):
    # Call REST framework's default exception handler first,
    # to get the standard error response.
    response = exception_handler(exc, context)

    # Now add the HTTP status code to the response.
    if response is not None:
        response.data = {
            "status_code": response.status_code,
            "errors": process_errors(response.data),
        }
    return response
