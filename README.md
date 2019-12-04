
# Human Lambdas REST API
Backend to accessing and utilizing Human Lambdas platform. 

## Cloning

```
$ git clone https://github.com/Human-Lambdas/hl-rest-api.git && cd hl-rest-api
```

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
python manager.py createsuperuser
```
and it will ask for your user credentials and then set up the user account.  

## Registration Endpoint
To register a user you have to `POST` to `/users/register` with the following payload: 
```
{'name': <str>, 'email': <str>, 'password': <str>, 'organization': <str>, 'is_admin': <bool>}
```

## Retrieve and Update User Endpoint
To retrieve a user you have to `GET` to `/users/edit/<userd-id>`  and to update a user you use instead `PATCH` to the same endpoint along with a payload including the data you want to update. Here is an example of the payload to update the password of a user:

```
{'password': <str>}
``` 


## JWT Endpoint
To get the `access` and `refresh` token you need to `POST` to `/users/token` with the following payload: 
```
{'email': <str>, 'password': <str>,}
```
and if the information is correct it will return two tokens in the following message: 
```
{'refresh': <str>, 'access': <str>}
```

To refresh and get the new access token you will `POST` the following to `/users/token/refresh`:

```
{'refresh': <str> }
``` 

And it will respond with the `access` token: 

```
{'access': <str> }
``` 

## Create Workflow

The endpoint for creating a workflow is `/workflow/create` and the data it requires is the following: 

```
{
    'name': <str>, 
    'description': <str>, 
    'inputs': 
        [
            {
                "key": <str>, 
                "name": <str>, 
                "format": <data-type>,
            }, ...
        ], 
     'outputs': 
        [
            {
                "key": <str>, 
                "name": <str>, 
                "format": {"type": <output-type>, "<output-type>": [<str>, ...]},  
            }, ...
        ]
}
```
Here `<data-type>` is a choice between `image` or `text`; and `<output-type>` is a choice between `binary`, `single-class`, `multi-class` or `freetext`.