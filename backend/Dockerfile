FROM python:3.12

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE=1

WORKDIR /app_backend

COPY . /app/

RUN apt-get update

COPY ./requirements.txt .

RUN pip install -r requirements.txt