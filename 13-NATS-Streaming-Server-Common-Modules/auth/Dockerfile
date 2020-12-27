FROM node:alpine

RUN apk add --no-cache --update tini

WORKDIR /app

COPY package.json ./
COPY ./ ./

# CMD ["npm", "start"]
# CMD [ "/sbin/tini", "--", "node", "./bin/www" ]
CMD [ "/sbin/tini", "--", "npm", "start" ]