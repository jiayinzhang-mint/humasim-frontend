FROM node as build-stage

LABEL key="MINT"

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm install
RUN npm run build

EXPOSE 3000
