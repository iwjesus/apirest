FROM node:latest

WORKDIR /opt/api

COPY package.json package-lock.json index.js ./

RUN npm install

CMD node index.js

