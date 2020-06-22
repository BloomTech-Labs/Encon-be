


# Encon - Back End
![MIT](https://camo.githubusercontent.com/743d6ca437fec2ad80985c1208501b7c7b4b97ae/68747470733a2f2f696d672e736869656c64732e696f2f7061636b61676973742f6c2f646f637472696e652f6f726d2e737667)

EnCon lets users see and track their energy usage. The back end contains a SQLite3 test and development database and a PostgreSQL database for production.

the database has two tables linked with a foreign key. authentication is handled through JSON-web-tokens. The API allows users to make/update and delete both a user profile and saved appliances.

## The Team

| Alex Martinez | Ben Berger | David Yanofsky | Michael Ross | Trey Hugh |
|:--:|:--:|:--:|:--:|:--:|
| ![Alex Martinez](https://i.imgur.com/fnXqQ0L.jpg) |![Ben Berger](https://i.imgur.com/8p3gSQl.jpg) |![David Yanofsky](https://i.imgur.com/UhYHwuu.jpg)|![Michael Ross](https://i.imgur.com/XcmtLC1.png)|![trey Hugh](https://i.imgur.com/qwkZkK3.jpg)
| [Github](https://github.com/AlexandroM1234) | [Github](https://github.com/benjberg) | [Github](https://github.com/dqxy) |[Github](https://github.com/rssmj)|[Github](https://github.com/HUGHIII)

## Getting Started

After cloning, cd into the 'encon' folder and run  `npm i `  to install the dependencies needed. then run  `npm i -D jest nodemon`  to get the developer dependencies. run migrations to create tables. running the command 'npm start' will initiate the server. 

## Dependencies 

**Axios** - used to make HTTPS request between front/back and flask app.

**BcryptJs** - Bcrypt provides us with our hashing for the JWTs.

**CORS** - enables us to connect to other addresses (front end/flask app).

**DotEnv** - allows us to store environment variables without exposing them to the public.

**Helmet** - Helmet allows us to set custom http headers.

**jsonwebtoken** - Creates and manages JWTs

**Knex** - SQL editor 

**PG** - PostgreSQL is the database used in production

**Sqlite3** - database used for development/testing

**Supertest** - runs test

## Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

```
* PORT= Integer (pick a number to run the port on)
JWT_SECRET= random sentance (mash keys)
HASH_ROUTER= Integer (pick a number for the hash rounds)
DATABASE_URL= the database URL provided by heroku
                     |
```

## Table Schema

users table:

| Field | Data Type | Metadata|
|:--:|:--:|:--:|
| id | integer | increments, primary key |
|name| string | notNullable |
|email|string|notNullable, unique|
|password|string|notNullable|
|state|string|notNullable|


Device table:
| Field | Data Type | Metadata|
|:--:|:--:|:--:|
| id | integer | increments, primary key|
| device |string|notNullable|
|hours|string|noNullable|
|days|string|notNullabe|
|user_id|integer|notNullable, foreign key| 


## API

   API link:  https://encon-be.herokuapp.com/

| Method | Endpoint |Description|
|:--:|:--:|:--:
| POST | /api/auth/register |registers users|
|POST|/api/auth/login|logs user in generating JWT|
|POST|/api/encon/appliance|post device to users list|
|GET|/api/encon/appliance|retrieves user device list|
|GET|/api/encon/users| retrieves user data |

## Issue/Bug Request
**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

-   Check first to see if your issue has already been reported.
-   Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
-   Create a live example of the problem.
-   Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

## Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

-   Ensure any install or build dependencies are removed before the end of the layer when doing a build.
-   Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
-   Ensure that your code conforms to our existing code conventions and test coverage.
-   Include the relevant issue number, if applicable.
-   You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.
## Documentation

See  [Frontend Documentation](https://github.com/Lambda-School-Labs/Encon-fe)  for details on the frontend of our project.
