/*
  Warnings:

  - You are about to drop the `Categoria` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DetallePedido` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mesa` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pedido` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Producto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DetallePedido" DROP CONSTRAINT "DetallePedido_pedidoId_fkey";

-- DropForeignKey
ALTER TABLE "DetallePedido" DROP CONSTRAINT "DetallePedido_productoId_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_mesaId_fkey";

-- DropForeignKey
ALTER TABLE "Producto" DROP CONSTRAINT "Producto_categoriaId_fkey";

-- DropTable
DROP TABLE "Categoria";

-- DropTable
DROP TABLE "DetallePedido";

-- DropTable
DROP TABLE "Mesa";

-- DropTable
DROP TABLE "Pedido";

-- DropTable
DROP TABLE "Producto";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "restaurantes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "restaurantes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Plato" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT,
    "restauranteId" INTEGER NOT NULL,

    CONSTRAINT "Plato_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Plato" ADD CONSTRAINT "Plato_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "restaurantes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
