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

Start HL in a temporary container

```sh
docker run -it --rm --entrypoint bash -p 8000:8000 hl -c 'hl initdb && hl up'
```

