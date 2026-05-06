import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateRestauranteDto } from './dto/create-restaurante.dto';
import { UpdateRestauranteDto } from './dto/update-restaurante.dto';

@Injectable()
export class RestauranteRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRestauranteDto) {
    return this.prisma.restaurante.create({ data });
  }

  async findAll() {
    return this.prisma.restaurante.findMany();
  }

  // Agrega esto:
  async findOne(id: number) {
    return this.prisma.restaurante.findUnique({ where: { id: Number(id) } });
  }

  async update(id: number, data: UpdateRestauranteDto) {
    return this.prisma.restaurante.update({ where: { id: Number(id) }, data });
  }

  async remove(id: number) {
    return this.prisma.restaurante.delete({ where: { id: Number(id) } });
  }
}
