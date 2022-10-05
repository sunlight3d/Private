#FROM node:12.0-slim
FROM node:18
# Create app directory
WORKDIR /app
#ENV NODE_ENV=production
COPY . .
RUN npm install
EXPOSE 3000
CMD [ "node", "server.js" ]