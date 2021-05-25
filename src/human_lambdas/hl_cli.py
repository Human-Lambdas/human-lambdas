import os
import shutil
import subprocess
import sys
from pathlib import Path
from subprocess import PIPE

import click


@click.group()
def cli():
    if "POSTGRES_DB" in os.environ:
        click.echo(
            click.style(
                "POSTGRES_DB is set, will try to run against remote DB",
                fg="yellow",
            )
        )
    else:
        click.echo("Running against local sqlite")


@click.command()
def up():
    """Starts Human Lambdas"""
    html = Path(__file__).parent / "html"
    html.mkdir(exist_ok=True)
    html_tgz = Path(__file__).parent / "frontend.tgz"

    shutil.unpack_archive(html_tgz, extract_dir=html)
    click.echo("Human Lambdas web running on http://localhost:8000/")
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
