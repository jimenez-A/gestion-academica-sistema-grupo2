# Etapa 1: Construcción
FROM node:20-alpine AS builder
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./
RUN npm install

# Copiar el resto del código y generar Prisma
COPY . .
RUN npx prisma generate --schema=./prisma/schema.prisma
RUN npm run build

# Etapa 2: Imagen Final (Ligera)
FROM node:20-alpine
WORKDIR /usr/src/app

# Solo copiamos lo necesario para ejecutar
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/entrypoint.sh ./

RUN chmod +x entrypoint.sh

EXPOSE 3000

ENTRYPOINT ["./entrypoint.sh"]

