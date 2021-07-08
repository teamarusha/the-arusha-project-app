# THE Arusha Project

Duration: 3 Weeks (1 Week Scoping, 2 Weeks Coding)

In the United States we are accustom to many things that developing countries don't have, one of these things we don't even think about- Emergency Medical Services (EMS). Developing areas of the world have little to no data collection from trauma responses. In Arusha, Tanzania we were told there is only one abumlance for the whole county. Our client, Nathan Koranda, brought this problem to our attention and challenged us to take on the task of creating an app to collect data.

Over the past three weeks we have scoped our project idea and collaborated to develop an application that allows users to create accurate data collection during a trauma call. Our team researched the internet usage available in Tanzania and learned that it is very limited, so we designed our app to take that into consideration by using local storage. By using local storage the responders can continue to fill out the forms even if they lose internet connection, they will need connection to first initialize the application and to submit the forms at the end.

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Setup
- Run `npm install`
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
- Replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. 
- Start postgres if not running already by using `brew services start postgresql`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

- Create a database called 'arusha_project', we recommend using PostgreSQL to manage your server to database connection and Postico to run the database queries, as those were what we used. If you would like to name your database something else, you will need to change `arusha_project` to the name of your new database name in `server/modules/pool.js`

## Built With

- React
- Redux
- Redux-Saga
- Express
- Node.js
- Passport
- PostgreSQL
- Material UI
- Figma (to create our wireframes during scoping)
- Db diagram (to create our ERD during scoping)

## Acknowledgement

Thank you to our client for entrusting us to create such an impactful application and to Mary Mosman, our instructor, for sharing her wealth of knowledge with us. Thanks to all the staff at Prime Digital Academy for your continued help and support.

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Support

If you have any issues please contact Prime Digital Academy