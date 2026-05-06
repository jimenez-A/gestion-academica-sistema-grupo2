import { Module } from '@nestjs/common';
import { RestaurantesService } from './restaurantes.service';
import { RestaurantesController } from './restaurantes.controller';
import { RestauranteRepository } from './restaurante.repository'; // Verifica que el archivo se llame así
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RestaurantesController],
  providers: [
    RestaurantesService, 
    RestauranteRepository 
  ],
})
export class RestaurantesModule {}
