import os

import click
from django.core.management.utils import get_random_secret_key

if not "SECRET_KEY" in os.environ:
    click.echo(
        click.style(
            "No SECRET_KEY present, using ephemeral key. Session/password reset tokens won't work",
            fg="yellow",
        )
    )
    os.environ["SECRET_KEY"] = get_random_secret_key()
