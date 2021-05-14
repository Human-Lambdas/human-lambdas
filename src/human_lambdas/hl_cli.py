import subprocess
import sys
from subprocess import PIPE
from threading import Thread

import click

from human_lambdas.web import httpd


@click.group()
def cli():
    pass


@click.command()
def up():
    """Starts Human Lambdas"""
    th = Thread(target=httpd.serve_forever, daemon=True)
    th.start()
    click.echo("Human Lambdas running on http://localhost:3000")
    subprocess.run(
        f"{sys.executable} -m human_lambdas.manage runserver",
        shell=True,
        stdin=PIPE,
        stdout=PIPE,
        check=True,
    )


cli.add_command(up)

if __name__ == "__main__":
    cli()
