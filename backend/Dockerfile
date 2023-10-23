FROM node:18-alpine AS development

# system package deps
RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app/backend

COPY package*.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm install
RUN npm run build

EXPOSE 3000

FROM node:18-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# system package deps
RUN apk update && apk upgrade
RUN apk add --no-cache libc6-compat

WORKDIR /usr/src/app/backend

COPY --from=development /usr/src/app/backend .

EXPOSE 3000

CMD ["node", "dist/main"]