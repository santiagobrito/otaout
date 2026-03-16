FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
RUN echo "NPM CI SUCCESS"
COPY . .
RUN echo "STARTING BUILD" && npm run build && echo "BUILD SUCCESS"
ENV PORT=3000
EXPOSE 3000
CMD ["npm", "start"]
