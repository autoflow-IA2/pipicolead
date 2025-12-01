# Multi-stage build para otimizar o tamanho final da imagem

# Estágio 1: Build da aplicação
FROM node:18-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências
COPY package.json package-lock.json ./

# Instalar dependências (npm install é mais tolerante que npm ci)
RUN npm install --production=false

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Estágio 2: Servir com Nginx
FROM nginx:alpine

# Copiar arquivos buildados
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuração customizada do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expor porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
