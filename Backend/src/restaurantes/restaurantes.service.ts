import { Injectable } from '@nestjs/common';
import { RestauranteRepository } from './restaurante.repository';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class RestaurantesService {
  constructor(
    private readonly restauranteRepository: RestauranteRepository,
    private readonly prisma: PrismaService, 
  ) {}

  async create(createRestauranteDto: CreateRestauranteDto) {
    return this.restauranteRepository.create(createRestauranteDto);
  }

  async findAll() {
    return this.restauranteRepository.findAll();
  }

  // Agrega estas funciones que faltan:
  async findOne(id: number) {
    return this.restauranteRepository.findOne(id);
  }

  async update(id: number, updateRestauranteDto: UpdateRestauranteDto) {
    return this.restauranteRepository.update(id, updateRestauranteDto);
  }

  async remove(id: number) {
    return this.restauranteRepository.remove(id);
  }
  async findPlatosByRestaurante(restauranteId: number) {
  return this.prisma.plato.findMany({
    where: {
      restauranteId: restauranteId,
    },
  });
}
}

