FROM node:16.16.0-alpine as builder
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
