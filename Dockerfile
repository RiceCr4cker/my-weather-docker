FROM node:22
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY app.mjs app.mjs
ENTRYPOINT ["node", "app.mjs"]
