FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/
EXPOSE 8000
CMD gunicorn hl_rest_api.wsgi -b 0.0.0.0:8000 -w 1 -t 1 --timeout 0 --preload
