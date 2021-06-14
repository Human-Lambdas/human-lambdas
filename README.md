<p align="center">
<img width="470" alt="logo" src="https://user-images.githubusercontent.com/565238/119004910-e0034900-b986-11eb-83ec-4e0082b4303b.png">
</p>
    
---

# Human Lambdas

Human Lambdas is an open source Human in the Loop platform for anyone to run their own private Mechanical Turk.

## How it works

![HL](https://user-images.githubusercontent.com/565238/119013488-f2818080-b98e-11eb-8387-28b685ed0bfb.gif)

It is designed to provide an **all-in-one solution to build, operate and monitor Human in the Loop processes**. Its highly flexible, composable and user-friendly UI is designed to enable anyone to easily support all sorts of bespoke manual tasks. Some examples are: data annotation, data cleaning, quality assurance, data extraction, sales research, content moderation, customer operations...

![marketplace](https://user-images.githubusercontent.com/565238/119009286-e267a200-b98a-11eb-89fd-c7c40c00116c.gif)

### Learn more

- [Sample Use Cases](https://www.humanlambdas.com/use-cases)
- [Documentation](https://docs.humanlambdas.com/)
- [Manual](https://docs.humanlambdas.com/manual/introduction)
- [API](https://docs.humanlambdas.com/api/introduction)

## Getting Started

We are going to run Human Lambdas on a developer device.

Please ensure you have Docker installed.

```sh
mkdir .human_lambdas # create data directory

docker run \
  -p 8000:8000 \
  -it \
  --rm \
  -v $(pwd)/.human_lambdas:/.human_lambdas \
  hlambdas/human-lambdas:v1.0
```

A shell should eventually start inside the container.

Now initialize a sqlite database in your .human_lambdas dir

```sh
human-lambdas initdb
```

Start the server

```sh
human-lambdas up
```

Human Lambdas is now running against a Sqlite database stored in your working directory.

Check out the server at http://localhost:8000 .

_Note: It is best to use incognito or clear cookies if you have used it before without setting a Django `SECRET_KEY`_

**Next** Try defining your first queue by following this [guide](https://docs.humanlambdas.com/quickstart/creating-a-queue).

## Run with Docker and Postgres

Human Lambdas requires a database for storing user and task data. When you deploy an instance for your team it is best to use a production-grade database such as Postgres.

You can use a managed Postgres product such as Amazon RDS, or use a Docker container as follows.

When starting your container, pass in authentication details in environment variables.

```sh
export POSTGRES_USER=hlambda
export POSTGRES_DB=hlambda
export POSTGRES_PASSWORD=some_password

docker run \
  -p 5432:5432 \
  -e "POSTGRES_USER=$POSTGRES_USER" \
  -e "POSTGRES_PASSWORD=$POSTGRES_PASSWORD" \
  -e "POSTGRES_DB=$POSTGRES_DB" \
  postgres:10
```

Then initialise your database and start the Human Lambdas server in another container:

```sh
export POSTGRES_HOST="host.docker.internal" # Note: This assumes you are trying this out on OS X
export POSTGRES_PORT=5432
export POSTGRES_USER=hlambda
export POSTGRES_DB=hlambda
export POSTGRES_PASSWORD=some_password
docker run \
  -it \
  --rm \
  -e "POSTGRES_HOST=$POSTGRES_HOST" \
  -e "POSTGRES_PORT=$POSTGRES_PORT" \
  -e "POSTGRES_USER=$POSTGRES_USER" \
  -e "POSTGRES_PASSWORD=$POSTGRES_PASSWORD" \
  -e "POSTGRES_DB=$POSTGRES_DB" \
  --entrypoint=bash \
  -p 8000:8000 \
  -v $(pwd)/.human_lambdas:/.human_lambdas \
  hlambdas/human-lambdas:v1.0 \
  -c 'hl initdb && hl up'
```

Human Lambdas is now available on localhost:8000.

This approach lets you use Human Lambdas in stateless environments such as Google Cloud Run as long as

1. You do not run `initdb` on startup, as it is not thread-safe
2. You set a single `SECRET_KEY` environment variable so that all Django Invite/Session tokens work

## Directly install Python Package

Requires Python 3.

```sh
pip install human-lambdas
```
