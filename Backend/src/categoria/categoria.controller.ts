import { Controller, Get } from '@nestjs/common';
import { CategoriaService } from './categoria.service'; // Asegúrate de importar el servicio

@Controller('categorias')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }
}