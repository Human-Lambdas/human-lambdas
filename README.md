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

- [Hosted App](https://app.humanlambdas.com/)
- [Sample Use Cases](https://www.humanlambdas.com/use-cases)
- [Documentation](https://docs.humanlambdas.com/)
- [Manual](https://docs.humanlambdas.com/manual/introduction)
- [API](https://docs.humanlambdas.com/api/introduction)

## Getting Started

We are going to run Human Lambdas on a developer device.

Please ensure you have Python 3 installed on a Mac or Linux environment then run the following.

```sh
pip install human-lambdas
```

Now initialize a sqlite database in a local `.human_lambdas` directory.

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

**Next** Try defining your first queue by following this [guide](https://docs.humanlambdas.com/quickstart/creating-a-queue). Note that external integrations require our [hosted deployment](https://humanlambdas.com/), or additional developer setup.

## Use Postgres for Your Database

Define the following variables so both Docker and your Human Lambdas application can read them:

```sh
export POSTGRES_HOST=localhost
export POSTGRES_PORT=5432
export POSTGRES_USER=hlambda
export POSTGRES_DB=hlambda
export POSTGRES_PASSWORD=some_password
```

Start Postgres in a local docker container

```sh
docker run \
  -p 5432:5432 \
  -e "POSTGRES_USER=$POSTGRES_USER" \
  -e "POSTGRES_PASSWORD=$POSTGRES_PASSWORD" \
  -e "POSTGRES_DB=$POSTGRES_DB" \
  postgres:10
```

Remember to run `hl initdb` before starting your server.

## Development

Install:

```sh
pip install poetry # poetry is the python package manager for the repo

poetry install # will install project in a virtualenv

pre-commit install # setup linters etc.
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
