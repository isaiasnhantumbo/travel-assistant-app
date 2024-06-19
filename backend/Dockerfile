FROM node:lts-alpine as builder

ENV NODE_ENV=production
ENV DB_HOST=
ENV DB_PORT=
ENV DB_USER=
ENV DB_PASSWORD=
ENV DB_NAME=
ENV PORT=
ENV OPEN_WEATHER_API_KEY=
ENV EXCHANGE_RATES_API=
ENV OPEN_BANK_API_URL=
ENV EXCHANGE_RATES_API_URL=
ENV OPEN_WEATHER_API_URL=
ENV TOKEN_SECRET=
ENV PORT=6523

WORKDIR /usr/src/app

COPY package.json tsconfig.json ./

RUN npm install 
# RUN yarn generate:docs

COPY . .

RUN npm run build

EXPOSE 6523

# RUN chown -R node /usr/src/app
# USER node

CMD ["node", "dist/api/server.js"]

