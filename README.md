
# Human Lambdas REST API
Backend to accessing and utilizing Human Lambdas platform. 

## Running API locally
You will need to install `docker` and `docker-compose` to be able to run the API locally. 
Once you have installed them all you have to do is to run the following command:
```
docker-compose up
```
This should set up the enviroment and run both the database and the dockerfile.

you can access the api at `0.0.0.0:8000`

The admin can be accessed at `0.0.0.0:8000/admin`

## Registration
Registration is accessed at `/users/register` and the payload you need to `POST` should include the following: 
```
{'name': <str>, 'email': <str>, 'password': <str>, 'organization': <str>, 'is_admin': <bool>}
```

## Login
To login you need to `POST` to `/users/login` with the following payload: 
```
{'email': <str>, 'password': <str>,}
```
and if the information is correct it will return a `token` in the following message: 
```
{'email': <str>, 'token': <str>}
```


## General information about setting up postgreSQL
Setting up a user and a database in postgreSQL:
```
CREATE DATABASE yourdbname;
CREATE USER youruser WITH ENCRYPTED PASSWORD 'yourpass';
GRANT ALL PRIVILEGES ON DATABASE yourdbname TO youruser;
ALTER USER youruser CREATEDB;
```