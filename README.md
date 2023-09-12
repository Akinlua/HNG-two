# Person API

The REST API allows you to perform CRUD (Create, Read, Update, Delete) operations on a "Person" model with id and name attributes.

## Table of Contents

1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Configuration](#configuration)
5. [Running the API](#running-the-api)
6. [API Documentation](#api-documentation)
7. [Examples](#examples)

## Introduction

The Person API provides a RESTful interface to manage person records with basic information.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.      

- MongoDB set up and running.

- Git (for cloning the repository).

## Installation

1. Clone the repository:

   ```shell

   git clone https://github.com/Akinlua/HNG-two.git

2. Install dependencies

    npm install

## Configuration

1. Create a .env file in the project root and configure your Mongodb connection. Also, add the port on which you want the server to listen to (optional, server listen to 3000 by default)

    MONGODB_URI = your_mongodb-uri

    PORT = your_port_value

## Running the API

To start the API Locally, run:

npm start

## API Full Documentation
The full API docs can be found in the file `DOCUMENTATION.md`

## Examples
Here are some examples on how to use the API:

You can use any application such as Postman to make the requests

### Create A person

POST http://localhost:3000/api

Content-Type: application/json

{

    "name": "Elon Musk"

}

### Read a Person
GET http://localhost:3000/api/{id}

### Update a Person
PATCH http://localhost:3000/api/{id}

Content-Type: application/json

{

    "name": "Updated Elon Musk"

}

### Delete A person

DELETE http://localhost:3000/api/{id}

