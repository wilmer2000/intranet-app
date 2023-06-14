# Base image
FROM node:18-alpine

# system package deps
RUN apk add --no-cache --virtual .tools bash curl bind-tools
RUN apk add --no-cache --virtual .npm-build python3 make g++ git
RUN apk update && apk upgrade

# Make folder to put our files in
RUN mkdir -p /usr/src/app/frontend && \
    chown -R 1000:1000 /usr/src/app

# Set working directory so that all
# subsequent command runs in this folder
WORKDIR /usr/src/app/frontend

# Copy package json and install dependencies
COPY package*.json ./
RUN npm install

# Copy our app
COPY . .

# Expose port to access server
EXPOSE 3000

# Command to  run our app
CMD [ "npm", "run", "dev"]