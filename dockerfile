FROM node:20-alpine

WORKDIR /project

COPY package.json package-lock.json ./
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000
