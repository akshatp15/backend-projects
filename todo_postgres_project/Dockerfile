# Use an official node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and the package-lock.json to the container
COPY package*.json .

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Add these 2 lines to make the Prisma Client work
COPY prisma ./prisma
RUN npx prisma generate 

# Expose the port that the app runs on
EXPOSE 5000

# Define the command to run application
CMD ["node", "./src/server.js"]