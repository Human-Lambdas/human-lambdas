import os
import shutil
import subprocess
import sys
from pathlib import Path
from subprocess import PIPE
from threading import Thread

import click
from django.core.management.utils import get_random_secret_key

from human_lambdas.web import httpd

if not "SECRET_KEY" in os.environ:
    click.echo(
        click.style(
            "No SECRET_KEY present, using ephemeral key. Session/password reset tokens won't work",
            fg="yellow",
        )
    )
    os.environ["SECRET_KEY"] = get_random_secret_key()


@click.group()
def cli():
    pass


@click.command()
def up():
    """Starts Human Lambdas"""
    html = Path(__file__).parent / "_html"
    html.mkdir(exist_ok=True)
    html_tgz = Path(__file__).parent / "html.zip"

    shutil.unpack_archive(html_tgz, extract_dir=html)
    th = Thread(target=httpd.serve_forever, daemon=True)
    th.start()
    click.echo("Human Lambdas web running on http://localhost:3000")
    gunicorn = Path(sys.executable).parent / "gunicorn"
    cmd = f"{gunicorn.as_posix()} human_lambdas.hl_rest_api.wsgi -b 0.0.0.0:8000 -w 1 -t 1 --timeout 0 --preload"
    click.echo(f"Running {cmd}")
    subprocess.run(
        cmd,
        shell=True,
        stdin=PIPE,
        stdout=PIPE,
        check=True,
    )


@click.command()
def initdb():
    """Initializes the Human Lambdas Database"""
    cmd = f"{sys.executable} -m human_lambdas.manage migrate"
    click.echo(f"Running {cmd}")

    subprocess.run(
        cmd,
        shell=True,
        stdin=PIPE,
        stdout=PIPE,
        check=True,
    )


cli.add_command(up)
cli.add_command(initdb)

if __name__ == "__main__":
    cli()
