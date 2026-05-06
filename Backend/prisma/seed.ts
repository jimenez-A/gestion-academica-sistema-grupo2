import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // 1. Primero creamos el restaurante (el ID debe coincidir con el que usas en el plato)
  const restaurante = await prisma.restaurante.upsert({
    where: { id: 1013111155 },
    update: {},
    create: {
      id: 1013111155,
      nombre: 'Restaurante Corhuila',
      direccion: 'Carrera 34 a sur #23-30',
      telefono: '3138060950',
      descripcion: 'Sede Neiva',
    },
  });

  // 2. Ahora sí creamos el plato vinculado a ese restaurante
  const plato = await prisma.plato.create({
    data: {
      nombre: 'Sancocho de Gallina',
      precio: 20000,
      descripcion: 'Acompañado de arroz y aguacate',
      restauranteId: restaurante.id, 
    },
  });

  console.log('¡Sistema sincronizado!');
  console.log('Restaurante listo:', restaurante.nombre);
  console.log('Plato añadido:', plato.nombre);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
  