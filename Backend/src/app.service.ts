import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'bienvenido a la plataforma de restaurantes nextbite';
  }
}
