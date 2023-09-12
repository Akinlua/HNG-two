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

Your API will be accessible at `http://localhost:PORT`

## API Full Documentation
The full API docs can be found in the file `DOCUMENTATION.md`

## Examples
Here are some examples on how to use the API:

You can use any application such as Postman to make the requests

### Create A person

POST /api

Content-Type: application/json

.Request:

    {
        "name": "Elon Musk"
    }

.Response:

    {
        "person": {
            "name": "Elon Musk",
            "_id": "64fecbf1623b0333646ac6cb",
            "__v": 0
        }
    }

### Read a Person
GET /api/{id}

.Response:

    {
        "person": {
            "_id": "64fecbf1623b0333646ac6cb",
            "name": "Elon Musk",
            "__v": 0
        }
    }

### Update a Person
PATCH /api/{id}

Content-Type: application/json

.Request:

    {
        "name": "Updated Elon Musk"
    }

.Response:

    {   
        "person": {
            "name": "Updated Elon Musk",
            "_id": "64fecbf1623b0333646ac6cb",
            "__v": 0
        }
    }
### Delete A person

DELETE /api/{id}

.Response:

    {
        "message": "Person 'Updated Elon Musk' has been deleted"
    }



## Error Responses

#### HTTP Status: 404 Not Found
Content-Type: application/json

If a wrong ID was inputted you could get the below error

. Body: 

    {
        "error": "Person Not Found"
    }
    
If the url isn't correct or doesn't exist, you would get the below error

. Body: 

    {
        "error": "Not Found"
    }

Cast error: if there was a problem with the id in the url, an error similar to the below will show

. Body: 

    {
        "error": "No item found with id: 64fe0e3c5"
    }

#### HTTP Status: 400 Bad Request
Content-Type: application/json

Validation error: if there was an error with your input such as not providing a name you will receive a similar error to the one below with the exact problem

. Body: 

    {
        "error": "Validation Error: must provide a name""
    }

#### HTTP Status: 500 Internal Server Error
Content-Type: application/json

If there was any other error with the server, you will get the below error

.Body:

    {
        "error": "Something Went wrong"
    }
