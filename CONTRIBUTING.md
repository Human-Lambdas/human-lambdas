# Contributing

## Developer Setup

Install:

Note: you may have an issue installing psycopg2, see [stackoverflow](https://stackoverflow.com/questions/26288042/error-installing-psycopg2-library-not-found-for-lssl)

```sh
pip install poetry # poetry is the python package manager for the repo

poetry install # will install project in a virtualenv

pre-commit install # setup linters etc.

pre-commit run --all-files # check pre-commit is happy before changing code

poetry shell
```

Run Python tests:

```sh
pytest -n=auto # Note: Some tests will fail if you don't run against Postgres
```

Build frontend and Python package

```sh
make
```

Build Docker image

```sh
docker build --tag hl .
```

Start HL in a temporary container

```sh
docker run -it --rm --entrypoint bash -p 8000:8000 hl -c 'hl initdb && hl up'
```
