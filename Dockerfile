FROM node:16-alpine as build

RUN npm install -g pnpm

WORKDIR /app
COPY package.json yarn.lock ./

RUN pnpm install
COPY . .
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "dev"]
