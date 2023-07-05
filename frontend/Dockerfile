# Base image
FROM node:18-alpine

# system package deps
RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat

# Set working directory so that all
# subsequent command runs in this folder
WORKDIR /usr/src/app

# Copy package json and install dependencies
COPY package*.json ./
RUN npm ci

# Expose port to access server
EXPOSE 3000

# Command to  run our app
CMD [ "npm", "run", "dev"]