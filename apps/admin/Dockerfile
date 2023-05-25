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
RUN npm run build:apps:admin

# Run in nginx
FROM nginx:1.19.10 AS runner
RUN mkdir /nginx
RUN rm -v /etc/nginx/nginx.conf
COPY apps/admin/nginx.conf /etc/nginx/
COPY --from=builder /app/apps/admin/dist /nginx/static

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

