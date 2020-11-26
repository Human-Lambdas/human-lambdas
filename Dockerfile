FROM python:3 as builder
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
EXPOSE 8000
COPY ./db-migrations.sh /db-migrations.sh
RUN chmod +x /db-migrations.sh
CMD db-migrations.sh


FROM builder as runserver
CMD gunicorn hl_rest_api.wsgi -b 0.0.0.0:8000 -w 4
