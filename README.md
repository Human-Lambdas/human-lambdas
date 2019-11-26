
# Human Lambdas REST API
Backend to accessing and utilizing Human Lambdas platform. 

## Cloning
```
$ git clone https://github.com/Human-Lambdas/hl-rest-api.git && cd hl-rest-api
```

## Running API locally
You will need to install `docker` and `docker-compose` to be able to run the API locally. 
Once you have installed them all you have to do is to run the following command:
```
docker-compose up
```
This should set up the enviroment and run both the database and the dockerfile.

you can access the api at `0.0.0.0:8000`

The admin can be accessed at `0.0.0.0:8000/admin`

On windows, the api must be accessed at `localhost:8000`

The admin must be accessed at `localhost:8000/admin`

## Registration
To register a user you have to `POST` to `/users/register` with the following payload: 
```
{'name': <str>, 'email': <str>, 'password': <str>, 'organization': <str>, 'is_admin': <bool>}
```

## JWT 
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


## General information about setting up postgreSQL
Setting up a user and a database in postgreSQL:
```
CREATE DATABASE yourdbname;
CREATE USER youruser WITH ENCRYPTED PASSWORD 'yourpass';
GRANT ALL PRIVILEGES ON DATABASE yourdbname TO youruser;
ALTER USER youruser CREATEDB;
```
