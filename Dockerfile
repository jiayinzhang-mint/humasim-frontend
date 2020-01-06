FROM node as build-stage

LABEL key="MINT"

ENV NODE_ENV=production
ENV HOST 0.0.0.0 

ENV APP_ROOT /src

RUN mkdir ${APP_ROOT}
WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm config set registry https://registry.npm.taobao.org

RUN npm install
RUN npm run build

EXPOSE 3000
