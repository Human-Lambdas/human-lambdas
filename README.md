# Human Lambdas REST API

Backend to accessing and utilizing Human Lambdas platform.

## Pre-reqs

You will need a `.env` file for your dev environment.

## Install

```bash
virtualenv .venv
. .venv/bin/activate
```

```bash
pip install -r requirements.txt -r requirements-dev.txt
```

Problems installing pyscopg2? try [this](https://stackoverflow.com/questions/26288042/error-installing-psycopg2-library-not-found-for-lssl).


```
pre-commit install
pre-commit run --all-files
```

## Start dev environment

```bash
. ./.env
```

### DB
```bash
docker run \
  -p 5432:5432 \
  -e "POSTGRES_USER=$POSTGRES_USER" \
  -e "POSTGRES_PASSWORD=$POSTGRES_PASSWORD" \
  -e "POSTGRES_DB=$POSTGRES_DB" \
  postgres:10
```
You will also want to create a superuser so that you can access the django admin (`localhost:8000/admin`). The superuser will have full authorization in the API as well.

```
python manage.py migrate
```
```
python manage.py createsuperuser # use email: a@a.com pass: a
```

### Backend
```
python manage.py runserver
```
## Unit Test

```
pytest
```


## QA with Swagger

Go to http://localhost:8000/swagger/

Click 'authorize' and paste in `bearer {your_token}`. You can find your token in the web inspector when viewing your local instance of the web front end.

## QA with front end

In Django admin set your superuser's organisation ID to `1`

```
export APP_URL=http://localhost:8000
yarn install
yarn dev
```

then login at http://localhost:3000

