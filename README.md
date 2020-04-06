
# Human Lambdas REST API
Backend to accessing and utilizing Human Lambdas platform.

## Cloning

```
$ git clone https://github.com/Human-Lambdas/hl-rest-api.git && cd hl-rest-api
```

## Committing
You will need to install pre-commit with:
```
pip install pre-commit
```
and run:
```
pre-commit install
```

Future commits will now be linted with black and flake8

Note that when you add an environmental variable, it must also be added to the environment list in docker-compose.yml

## Running API locally with Docker-Compose
You will need to install `docker` and `docker-compose` to be able to run the API locally. 
Once you have installed them all you have to do is to run the following command:
```
docker-compose up
```

(You might need to run it as an admin or use `sudo`)

This should set up the enviroment and run both the database and the dockerfile.

you can access the api at `localhost:8000`

The admin can be accessed at `localhost:8000/admin`

***You can access the API endpoint with the follwoing url: `localhost:8000/v1/`*** 
(Currently we have `version 1` out so each url path has to start with `v1`)

You will need to access the docker containers once they are running to be able to create a superuser or for testing purposes.
First off you need to list the containers that are running and you can do that by running following command on your terminal:
```
docker ps
```
This should show you a list of active containers that are currently running and it will look something lilke this:

```
CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
1e08c531cf83        hl-rest-api_web     "/docker-entrypoint.…"   10 minutes ago      Up 10 minutes       0.0.0.0:8000->8000/tcp   hlambda_api
2327c48f24eb        postgres:10         "docker-entrypoint.s…"   10 minutes ago      Up 10 minutes       0.0.0.0:5432->5432/tcp   hlambda_postgres
```
Here you can see that two containers are running; the `postgres` database container and the actual api `hl-rest-api_web`
To access any of these containers you will need the `Container ID`. For instance, to access the `hl-rest-api_web` you need to run the following command in the terminal:

```
docker exec -ti 1e08c531cf83 /bin/bash
``` 
This till take you inside the running container (virtual machine) which is in a linux enviroment. 
Once inside you can run tests by running following command: 
```
python manage.py test
```
You will also want to create a superuser so that you can access the django admin (`localhost:8000/admin`). The superuser will have full authorization in the API as well.
To create a superuser you run the following command in the container:

```
python manage.py createsuperuser
```
and it will ask for your user credentials and then set up the user account.  

## Retrieve and Update User Endpoint
To retrieve a user info you have to `GET` to `/users/<userd-id>`  and to update a user you use instead `PATCH` to the same endpoint along with a payload including the data you want to update. Here is an example of the payload to update the password of a user:

```
{'password': <str>}
``` 

## Retrieve and Update Workflow

To retrieve a specific workflow you can do so by calling `GET` to `/orgs/<org-id>/workflows/<workflow-id>`. To update the workflow you call the same endpoint but use `PATCH` instead along with a payload including the attributes you want to update. Below is an example of a payload for updating the description of a workflow:
```
{"description": "This is the new updated description of an existing workflow"}
```
Remember you will only have permission to retrieve and update the workflows which are part of your organization.
