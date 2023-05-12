# syntax=docker/dockerfile:1

# Start your image with a node base image
FROM node:18-alpine

# Create an application directory
RUN mkdir -p /app

# Set the /a pp directory as the working directory for any command that follows
WORKDIR /app

# Copy the local app package and package-lock.json file to the container
COPY . .

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN  npm install -g npm@9.6.4 \
     npm install 

# Specify that the application in the container listens on port 3000
EXPOSE 3004

# Start the app using serve command
CMD [ "yarn start", ]