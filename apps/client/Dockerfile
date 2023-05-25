# Install deps
FROM node:18.16.0-alpine AS deps
WORKDIR /app
RUN apk add --no-cache libc6-compat
COPY package.json package-lock.json ./
RUN npm i

# Build sources
FROM node:18.16.0-alpine AS builder
WORKDIR /app
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build:apps:client

# Run from nodejs
FROM node:18.16.0-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
COPY --from=builder --chown=nextjs:nodejs /app/apps/client/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/apps/client/.next/static ./apps/client/.next/static
COPY --from=builder --chown=nextjs:nodejs /app/apps/client/public ./apps/client/public
USER nextjs
EXPOSE 3000
ENV PORT 3000
CMD node apps/client/server.js
