FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs /app

USER nextjs

ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000
CMD ["npm", "start"]
