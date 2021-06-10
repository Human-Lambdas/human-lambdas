
FROM python:3.8

# requires poetry build before docker build
COPY dist/human_lambdas*whl human-lambdas-0.0.0-py3-none-any.whl
RUN pip install human-lambdas-0.0.0-py3-none-any.whl
EXPOSE 8000
ENTRYPOINT "bash"