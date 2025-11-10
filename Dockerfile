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
# Production stage (serve)
FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=builder /app/dist ./dist
EXPOSE 5173
CMD ["serve", "-s", "dist", "-l", "5173"]
