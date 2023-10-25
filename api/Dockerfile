FROM node:20-alpine

WORKDIR /usr/src/app/api

# system package deps
RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat

COPY package*.json ./
COPY tsconfig*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "start:dev"]

EXPOSE 3000
