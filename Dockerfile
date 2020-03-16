# FROM node:alpine AS builder

# WORKDIR /app

# COPY . .

# RUN npm install && \
#     npm run build

# FROM nginx:alpine

# COPY --from=builder /app/dist/* /usr/share/nginx/html/
FROM node:12.16.1-alpine AS builder
COPY . ./angular-navigation
WORKDIR /angular-navigation
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /angular-navigation/dist/angular-navigation/ /usr/share/nginx/html