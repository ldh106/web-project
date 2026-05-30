FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM alpine
COPY --from=build /app/dist /dist
CMD ["cp", "-r", "/dist/.", "/usr/share/nginx/html/"]