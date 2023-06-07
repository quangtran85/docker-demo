FROM node:18-alpine AS base
WORKDIR /app
COPY . .

FROM base AS dev
ENV NODE_ENV=development
RUN npm install

FROM base AS prod
ENV NODE_ENV=production
RUN npm install --omit=dev

EXPOSE 3000
CMD [ "node", "index.js" ]