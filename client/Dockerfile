FROM node:18.18-alpine3.17 AS base

WORKDIR /web-build

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install
COPY . .

FROM base AS test
WORKDIR /web-build
CMD ["npm", "run", "test:ci"]

FROM base AS e2e-test
WORKDIR /web-build
CMD ["npm", "start"]

FROM node:18.18-alpine3.17 AS final
WORKDIR /web
COPY . .
RUN npm install
RUN npm run build
CMD ["npm", "run", "serve"]