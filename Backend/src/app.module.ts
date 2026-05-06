import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from '../prisma/prisma.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ProductoModule } from './producto/producto.module';
import { EmpleadoModule } from './empleado/empleado.module';
import { ClienteModule } from './cliente/cliente.module';
import { MesaModule } from './mesa/mesa.module';
import { PedidoModule } from './pedido/pedido.module';
import { DetallePedidoModule } from './detalle-pedido/detalle-pedido.module';
import { FacturaModule } from './factura/factura.module';
import { RestaurantesModule } from './restaurantes/restaurantes.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    CategoriaModule,
    ProductoModule,
    EmpleadoModule,
    ClienteModule,
    MesaModule,
    PedidoModule,
    DetallePedidoModule,
    FacturaModule,
  RestaurantesModule, 
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}