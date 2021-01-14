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
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/

RUN dev_tools/get-templates > templates.json

EXPOSE 8000
RUN python manage.py migrate
CMD gunicorn hl_rest_api.wsgi -b 0.0.0.0:8000 -w 1 -t 1 --timeout 0 --preload
