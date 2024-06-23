# Etapa de desenvolvimento
FROM node:18.20.3 AS development

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Comando padrão para desenvolvimento
CMD ["npm", "run", "dev"]

# Etapa de build
FROM node:18.20.3 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Etapa de produção
FROM nginx:stable-alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
