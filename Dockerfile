FROM node:20-alpine
WORKDIR /app
COPY package.json ./
RUN npm install --legacy-peer-deps 2>&1 || (echo "=== NPM INSTALL FAILED ===" && cat /root/.npm/_logs/*.log 2>/dev/null && exit 1)
COPY . .
RUN npm run build 2>&1 || (echo "=== BUILD FAILED ===" && exit 1)
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000
CMD ["npm", "start"]
