FROM python:3
ENV PYTHONUNBUFFERED 1
ARG SECRET_KEY
ARG POSTGRES_DB
ARG POSTGRES_HOST
ARG POSTGRES_USER
ARG POSTGRES_PASSWORD
ARG POSTGRES_PORT
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
EXPOSE 8000
RUN echo $POSTGRES_HOST
RUN echo $POSTGRES_DB
RUN echo $POSTGRES_USER
RUN echo $POSTGRES_PASSWORD
RUN echo $POSTGRES_PORT
RUN echo $SECRET_KEY
RUN python manage.py showmigrations
RUN python manage.py migrate
RUN python manage.py showmigrations
CMD gunicorn hl_rest_api.wsgi -b 0.0.0.0:8000 -w 1 -t 1 --timeout 0 --preload
