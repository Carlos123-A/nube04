FROM node:latest

WORKDIR /pepito/hola

COPY . .

RUN npm install

EXPOSE 9000

CMD ["node", "server.js"]
