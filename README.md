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

```sh
docker run human-lambdas:0.1
```

Use our official Docker image to try out a deployment.

For persistent storage we recommend pointing your container at an external Postgres instance by setting the following environment variables.

```sh
docker run human-lambdas:0.1 \
    --env POSTGRES_HOST=example.eu-west-2.rds.amazonaws.com \
    --env POSTGRES_PORT=5432 \
    --env POSTGRES_DB=my_db \
    --env POSTGRES_USER=my_user \
    --env POSTGRES_PASSWORD=my_pw \
```

## Invite your Teammates

Human-lambdas integrates with Sendgrid to allow you to send invite emails to teammates and reset your password.

Connect your Sendgrid account to your deployment by passing your API key to your Docker container:

```sh
    --env SENDGRID_API_KEY=xxx
```
