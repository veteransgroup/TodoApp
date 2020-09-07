FROM python:3

# set environment variables
ENV PYTHONUNBUFFERED 1

COPY requirements.txt /

# install dependencies
RUN pip3 install -r /requirements.txt && mkdir /code

# set work directory
# RUN mkdir /code
WORKDIR /code

COPY . /code/

EXPOSE 80
