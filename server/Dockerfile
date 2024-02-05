FROM node:16.16.0-alpine as builder
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 3001
CMD ["npm", "run", "seeds-and-start"]
