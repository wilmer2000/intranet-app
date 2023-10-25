FROM node:20-alpine

WORKDIR /usr/src/app/frontend

# system package deps
RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "run", "dev"]

