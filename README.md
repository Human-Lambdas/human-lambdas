# Human Lambdas

TODO MARKETING COPY, QUICKLINKS, etc.

## Getting Started

We are going to run Human Lambdas on a developer device.

Please ensure you have Python 3 installed on a Mac or Linux environment then run the following.

```sh
pip install human-lambdas
```

Now initialize a sqlite database in your current directory

```sh
human-lambdas initdb
```

Start the frontend and backend servers

```sh
human-lambdas up
```

TODO gif

A browser tab should open on port 3000. If not, you can navigate manually by clicking http://localhost:3000/

Human Lambdas is now running against a Sqlite database stored in your working directory.

**Next** Try defining your first queue by following this [guide](https://docs.humanlambdas.com/quickstart/creating-a-queue). Note that external integrations require the [hosted version](https://app.humanlambdas.com/), or additional developer setup.

## Deployment with Docker

You can deploy Human Lambdas to any runtime supporting docker.
TODO

## Invite your Teammates

Human-lambdas integrates with Sendgrid to allow you to send invite emails to teammates and reset your password.

Connect your Sendgrid account to your deployment by passing your API key to your Docker container:

```sh
    --env SENDGRID_API_KEY=xxx
```

## Development

### Build the Python Package

```sh
poetry build
```

### Build a docker image

```sh
docker build --tag hl .
```

Start a terminal in a new container

```sh
docker run -it --rm -p 8000:8000 -p 3000:3000 hl bash
```

You can now start human lambdas inside the container using the CLI.