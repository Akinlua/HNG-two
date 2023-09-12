
#### Introduction

This Documentation outlines the usage and endpoints of the CRUD API for managing a "Person" Model. The API is accessible at `https://hng-two.akinlua.repl.co/api` and for usage visit github url `https://github.com/Akinlua/HNG-two` to get started with the API on your local machine

#### Table of Contents
Setting Up Locally
Create A person
Read Persons
Read A Person
Update A Person
Delete A Person
Error Responses
Limitation
Assumptions
Rate Limit
Deploy on a server
Conclusion



#### Setting Up Locally
Follow these steps to deploy the API on your local machine for development or testing purposes

# Clone the Repository
git clone  https://github.com/Akinlua/HNG-two.git

# install Dependencies
npm install

# Configure Environmental Variables
Create a `.env` file in the project root and configure your database connection settings as MONGODB_URI.
Also add the port on which you want to run the server on if you wish, add PORT in the env file with the port number to do so. Note: The application will run on 3000 if port not set.

# Start the Application
npm start

# Access the API Locally
Your API will be accessible at `http://localhost:PORT`

## API structure, formats and usage

#### Create A Person

# Endpoint: `POST /api`

# Content-Type: application/json

# Description: Creates a new person with the name provided in the request body and responds with the same name and it's id

# Request Body: 
{
    "name": "Elon Musk"
}
# Response: 
. HTTP Status: 201 Created
. Body: 
{
    "person": {
        "name": "Elon Musk",
        "_id": "64fecbf1623b0333646ac6cb",
        "__v": 0
    }
}


#### Read Persons

# Endpoint: `GET /api`

# Description: Retrieves a list of all persons with their name and respective id

# Response: 
. HTTP Status: 200 OK
. Body: 
{
    "persons": [
        {
            "_id": "64fe08323ef60e82c11ca710",
            "name": "femi",
            "__v": 0
        },
        {
            "_id": "64fecbf1623b0333646ac6cb",
            "name": "Elon Musk",
            "__v": 0
        }
    ]
}


#### Read A Person

# Endpoint: `GET /api/{id}`

# Description: Retrieves a specfic person by their ID

# Response: 
. HTTP Status: 200 OK
. Body: 
{
    "person": {
        "_id": "64fecbf1623b0333646ac6cb",
        "name": "Elon Musk",
        "__v": 0
    }
}


#### Update A Person

# Endpoint: `PATCH /api/{id}`

# Content-Type: application/json

# Description: Update the name of a specific person by their ID

# Request Body: 
{
    "name": "Updated Elon Musk"
}
# Response: 
. HTTP Status: 200 OK
. Body: 
{
    "person": {
        "name": "Updated Elon Musk",
        "_id": "64fecbf1623b0333646ac6cb",
        "__v": 0
    }
}


#### Delete A Person

# Endpoint: `DELETE /api/{id}`

# Description: Delete a specific person by their ID

# Response: 
. HTTP Status: 200  OK
. Body: 
{
    "message": "Person 'Updated Elon Musk' has been deleted"
}

#### Error Responses

# HTTP Status: 404 Not Found
# Content-Type: application/json

# if a wrong ID was inputted you could get the below error
. Body: 
{
    "error": "Person Not Found"
}
# if the url isn't correct or doesn't exist, you would get the below error
. Body: 
{
    "error": "Not Found"
}

# Cast error: if there was a problem with the id in the url, an error similar to the below will show
{
    "error": "No item found with id: 64fe0e3c5"
}

# HTTP Status: 400 Bad Request
# Content-Type: application/json

# Validation error: if there was an error with your input such as not providing a name you will receive a similar error to the one below with the exact problem
{
    "error": "Validation Error: must provide a name""
}

# HTTP Status: 500 Internal Server Error
# Content-Type: application/json

# if there was any other error with the server, you will get the below error
.Body:
{
    "error": "Something Went wrong"
}

#### Limitation
.The name field is not unique as a result, the API operations are performed using the id of the person

#### Assumptions
.Assumes the use of standard HTTP/HTTPS protocols for communication

#### Rate Limit
There is a Rate Limit of 100 requests per 15 minutes to help prevent overuse and potential Dos attacks.

#### Deploy on a Server
To deploy the API on a server for production use, follow these genral steps. Specific may differ depending on your hosting provider

# Choose a Hosting Provider such as AWS, Heroku and the likes
# Set Up a server: Follow the hosting docs to create a server instance and ensure it meeets the requirements of your application, including node js and mongodb setup
# Upload Your code
# Install Dependencies on the server
# Configure Environmental variables just as you did locally 
# Start the Application
# Configure your domain and DNS if needed 
# Secure the API by obtaining and installing an SSL certificate to enable HTTPS 


#### Conclusion
This API allows you to perform CRUD operations on the Person model. It also also has a field "__v" on every request which just shows the version.  Ensure that you provide Valid data in your requests to avoid receiving error responses.