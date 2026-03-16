FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npx next build
ENV PORT=3000
EXPOSE 3000
CMD ["npx", "next", "start"]
