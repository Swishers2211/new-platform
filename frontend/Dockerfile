FROM node:21-alpine

WORKDIR /app

COPY package.json .

RUN npm config set fetch-retries 5

RUN npm install -g npm@latest

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
