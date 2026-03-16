FROM node:20-alpine

# Install dependencies needed for native modules
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Accept all build args EasyPanel passes
ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_SITE_NAME
ARG RESEND_API_KEY
ARG RESEND_FROM_EMAIL
ARG RESEND_TO_EMAIL
ARG PORT
ARG HOSTNAME
ARG NODE_ENV
ARG GIT_SHA

ENV NEXT_PUBLIC_APP_URL=$NEXT_PUBLIC_APP_URL
ENV NEXT_PUBLIC_SITE_NAME=$NEXT_PUBLIC_SITE_NAME
ENV NEXT_TELEMETRY_DISABLED=1

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

EXPOSE 3000
CMD ["npx", "next", "start", "-p", "3000"]
