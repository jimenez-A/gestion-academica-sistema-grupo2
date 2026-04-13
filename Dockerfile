FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate --schema=src/prisma/schema.prisma
RUN npm run build

EXPOSE 3000

# Esta línea busca el archivo main.js dentro de dist, sin importar si hay subcarpetas
CMD ["sh", "-c", "node $(find dist -name main.js)"]
