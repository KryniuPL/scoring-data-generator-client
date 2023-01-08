FROM node:16-alpine
RUN apk add git
RUN git clone https://github.com/KryniuPL/scoring-data-generator-client
WORKDIR "/scoring-data-generator-client"
RUN npm ci
RUN npm run build
ENV NODE_ENV production
EXPOSE 80
CMD [ "npx", "serve", "build", "-l", "80"]
