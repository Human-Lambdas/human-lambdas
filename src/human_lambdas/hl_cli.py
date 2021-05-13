import subprocess
import sys

import click


@click.group()
def cli():
    pass


@click.command()
def up():
    """Starts Human Lambdas"""
    web = subprocess.Popen(
        f"{sys.executable} -m human_lambdas.web", close_fds=True, shell=True
    )
    click.echo("Human Lambdas running on http://localhost:3000")
    subprocess.check_output(
        f"{sys.executable} -m human_lambdas.manage runserver", shell=True
    )
    web.kill()

    click.echo("Stopped server")


cli.add_command(up)

if __name__ == "__main__":
    cli()
