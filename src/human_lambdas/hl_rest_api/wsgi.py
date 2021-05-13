"""
WSGI config for hl_rest_api project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.2/howto/deployment/wsgi/
"""

import os
from pathlib import Path

from django.core.wsgi import get_wsgi_application

if Path(".env").exists():
    from dotenv import load_dotenv

    load_dotenv(".env")

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "human_lambdas.hl_rest_api.settings")

application = get_wsgi_application()
