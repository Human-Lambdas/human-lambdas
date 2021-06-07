FROM python:3

ENV PYTHONUNBUFFERED 1

RUN mkdir /code
WORKDIR /code
COPY pyproject.toml /code/
COPY poetry.lock /code/
RUN pip install poetry && poetry config virtualenvs.create false
RUN poetry install

COPY . /code/
RUN poetry install

EXPOSE 8000
ENTRYPOINT [ "human-lambdas" ]
