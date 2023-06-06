FROM node:18-alpine AS base
WORKDIR /app
COPY . .

FROM base AS dev
ENV NODE_ENV=dev
RUN npm install

FROM base AS prod
ENV NODE_ENV=prod
RUN npm install --omit=dev

EXPOSE 3101
CMD [ "node", "index.js" ]