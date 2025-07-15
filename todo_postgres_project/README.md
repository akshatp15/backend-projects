# Todo Postgres Project
- This program is a todo full stack project which builds on top of Project_1, with the key changes being the database which now is PostreSQL and instead of manually writing SQL queries, this version using object-relation mapping(Prisma), and finally the entire project is containerized using Docker.
## Running the Program:
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
