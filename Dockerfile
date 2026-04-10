FROM node:22-alpine
WORKDIR /app

# Declare all build-args EasyPanel passes (avoids buildx warnings/errors)
ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_SITE_NAME
ARG SMTP_USER
ARG SMTP_PASS
ARG SMTP_TO_EMAIL
ARG NODE_ENV
ARG GIT_SHA

# Only NEXT_PUBLIC_* needed at build time for Next.js static generation
ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_SITE_NAME=$NEXT_PUBLIC_SITE_NAME

COPY package.json package-lock.json ./
RUN npm ci --include=dev
COPY . .
RUN npm run build

ENV PORT=3000
ENV HOSTNAME=0.0.0.0
EXPOSE 3000
CMD ["npm", "start"]
