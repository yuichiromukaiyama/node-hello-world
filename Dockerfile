FROM node:20-alpine

# https://github.com/krallin/tini
RUN apk add --no-cache tini
ENTRYPOINT ["/sbin/tini", "--"]

WORKDIR /usr/src/app
COPY ./package*.json ./
COPY ./index.js ./index.js
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]
