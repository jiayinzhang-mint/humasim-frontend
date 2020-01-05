FROM node:alpine as build-stage

LABEL key="MINT"

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm run build

EXPOSE 3000
