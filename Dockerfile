FROM python:3 as builder

RUN apt-get -y update
RUN apt-get install -y libpq-dev

COPY requirements.txt .
RUN pip install -r requirements.txt

FROM python:3-slim

RUN apt-get -y update \
  && apt-get install -y jq curl libpq-dev \
  && rm -rf /var 

COPY --from=builder /usr/local /usr/local
COPY . /code/
WORKDIR /code

ARG WEBFLOW_API_KEY
RUN dev_tools/get-templates > templates.json

ENV PYTHONUNBUFFERED 1
ARG SECRET_KEY
ARG POSTGRES_DB
ARG POSTGRES_HOST
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_PORT

EXPOSE 8000
RUN python manage.py migrate
CMD gunicorn hl_rest_api.wsgi -b 0.0.0.0:8000 -w 1 -t 1 --timeout 0 --preload
