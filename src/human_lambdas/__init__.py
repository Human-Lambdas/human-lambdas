import os
from pathlib import Path

import click
import dotenv
from django.core.management.utils import get_random_secret_key

env_path = Path(".human_lambdas/.env")
env_path.parent.mkdir(exist_ok=True)
env_exists = env_path.exists()

if not env_exists:
    env_path.write_text("\n")

dotenv.load_dotenv(env_path)

if not "SECRET_KEY" in os.environ:
    click.echo(
        click.style(
            f"No SECRET_KEY present, storing default key in {env_path.as_posix()}",
            fg="yellow",
        )
    )
    key = get_random_secret_key()
    os.environ["SECRET_KEY"] = key
    dotenv.set_key(env_path, "SECRET_KEY", key)
