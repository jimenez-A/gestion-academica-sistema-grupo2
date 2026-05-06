import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriaService {
  findAll() {
    return [
      { id: 1, nombre: 'Entradas' },
      { id: 2, nombre: 'Plato Fuerte' }
    ];
  }
}
