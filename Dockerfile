ARG NODE_VERSION=16-alpine

FROM node:${NODE_VERSION}

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
CMD   npm run start