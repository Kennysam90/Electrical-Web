# ---- Build stage ----
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files and install deps
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy source and build Vite app
COPY . .
RUN yarn build

# ---- Production stage (Nginx) ----
FROM nginx:stable-alpine

# Remove default Nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose custom port
EXPOSE 5173

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
