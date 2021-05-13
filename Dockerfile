FROM python:3

ENV PYTHONUNBUFFERED 1
ARG SECRET_KEY
ARG POSTGRES_DB
ARG POSTGRES_HOST
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_PORT
ARG WEBFLOW_API_KEY

RUN apt-get update -y \
  && apt-get install jq -y

RUN mkdir /code
WORKDIR /code
COPY . /code/
RUN pip install poetry && poetry build && pip install dist/human_lambdas-0.1.0-py3-none-any.whl

RUN dev_tools/get-templates > templates.json

RUN python -m human_lambdas.manage createsuperadmin bernat@humanlambdas.com alex@treebeard.io || true
RUN python -m human_lambdas.manage migrate

EXPOSE 8000
CMD gunicorn human_lambdas.hl_rest_api.wsgi -b 0.0.0.0:8000 -w 1 -t 1 --timeout 0 --preload
