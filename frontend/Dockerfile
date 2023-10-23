FROM node:18-alpine AS development

WORKDIR /usr/src/app/frontend

# system package deps
RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli

COPY . .

EXPOSE 4200

#CMD ng serve

CMD ["npm", "run", "dev"]

#CMD ["ng", "serve", "--host 0.0.0.0", "--port 4200"]


