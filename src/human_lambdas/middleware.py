from django.http.request import HttpRequest
from django.utils.deprecation import MiddlewareMixin

# WARNING: These must be kept up to date with all path='.*' in the client, and cannot clash
# with external.urls
CLIENT_ONLY = [
    "invite",
    "forgot",
    "signup",
    "signout",
    "outstanding",
    "queues",
    "users",
    "audits",
    "metrics",
    "settings",
]


def is_client_only(path: str):
    return any([path.startswith(f"/{cc}") for cc in CLIENT_ONLY])


class RewriteMiddleware(MiddlewareMixin):
    """Provide rewrites so client side web routes work, e.g. deeplinking into /queues"""

    def process_request(self, request: HttpRequest):
        if is_client_only(request.path_info):
            request.path_info = "/"
        pass
