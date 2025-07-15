# Project 1
- This program is a todo full stack project where the backend handles registration/login of users, authentication(JWT), adding/updating/deleting todos. 
## Running the Program:
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
