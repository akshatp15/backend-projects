# Backend Programs
## Overview
This repository contains backend projects that were made using Node.js and Express.js. The projects include REST API endpoints, authentication using JWT(JSON Web Token), data storage and manipulation using databases(PostreSQL and SQLite).

## Setup and Installation
### VSCode Installation and Extensions
To view/edit the projects you will need to use VSCode.<br>
To install VSCode please follow the instruction at the following link, [Downloading VSCode](https://code.visualstudio.com/Download)
 #### Extensions
- To be able to run the tests for the endpoints, please install the REST Client extension on VSCode
### Node.js Installation
To be able to run any of the programs in this repository you will need to download Node.js. To do so please follow the instructions in the link below for your specific operating system.
- [https://nodejs.org/en/download](https://nodejs.org/en/download)
#### Docker
For the final project which uses Docker for containerization, you will need to download Docker. To do so please follow the instructions in the link below for your specific operating system.
- [https://www.docker.com/](https://www.docker.com/)

## Program Descriptions
### Intro Project
- This program is a basic backend project which handles incoming HTTP requests(GET, POST, DELETE) and sends back responses using Node.js and Express.js.
  #### Running the Program:
  1. First open a new terminal window after opening the project in VSCode
  2. Change from the root directory into the intro_project directory
      ```
      cd intro_project
      ```
  3. Run the backend server
     ```
      npm run dev
     ```
  4. View the website and interact with it by opening a new browser window and typing in localhost:8383
  5. Test the endpoints by running the tests in the test.rest file by pressing the send request over the various tests. <br> The POST request and DELETE requests will update the website at localhost:8383.
     
### Project 1
- This program is a todo full stack project where the backend handles registration/login of users, authentication(JWT), adding/updating/deleting todos. 
  #### Running the Program:
  1. First open a new terminal window after opening the project in VSCode
  2. Change from the root directory into the intro_project directory
      ```
      cd project_1
      ```
  3. Installing the dependencies and checking Node.js
     - To be able to use the SQLite database and other features of this project the version of node needs to be 22 or higher. <br> To check the version use the command below
       ```
        node -v
       ```
     - To switch node versions please use node version manager(nvm) using this link [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating). Once downloaded run the commands below one after another.
       ```
        nvm install 22
        nvm use 22
       ```
     
  4. Run the backend server
     ```
      npm run dev
     ```
  5. View the website and interact with it by opening a new browser window and typing in localhost:5000
  6. To test the endpoints through by the tests in the todo-app.rest file press the send request over the various tests. <br> You can also interact with the front-end at localhost:5000 to test/view all the functionality of the backend.
     
### Todo Postgres Project
- This program is a todo full stack project which builds on top of Project_1, with the key changes being the database which now is PostreSQL and instead of manually writing SQL queries, this version using object-relation mapping(Prisma), and finally the entire project is containerized using Docker.
  #### Running the Program:
  1. First open a new terminal window after opening the project in VSCode
  2. Change from the root directory into the intro_project directory
      ```
      cd todo_postgres_project
      ```
  3. Generate the Prisma client
       ```
        npx prisma generate
       ```
     
  4. Creating the PostgreSQL database 
     ```
      docker compose run app npx prisma migrate dev --name init
     ```
  5. Booting up the Docker Container and starting the app
      ```
      docker compose up -d
      ```
     
  6. View the website and interact with it by opening a new browser window and typing in localhost:5000
  7. To test the endpoints through by the tests in the todo-app.rest file press the send request over the various tests. <br> You can also interact with the front-end at localhost:5000 to test/view all the functionality of the backend.
  8. Docker commands
     - Shutting down the container
        ```
        docker compose down
        ```
     - Deleting all containers for system
        ```
        docker system prune
        ```
       
       

