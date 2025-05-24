FROM docker.io/node:23.11.0-slim@sha256:dfb18d8011c0b3a112214a32e772d9c6752131ffee512e974e59367e46fcee52 AS build

WORKDIR /usr/app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

FROM docker.io/nginx:1.27.5-alpine3.21-slim

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/app/dist/devopsbeerer-frontoffice/browser/ /usr/share/nginx/html

EXPOSE 80