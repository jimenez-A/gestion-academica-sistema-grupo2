import { IsNumber, IsNotEmpty } from 'class-validator';

export class CreateDetallePedidoDto {
  @IsNumber()
  @IsNotEmpty()
  cantidad!: number;

  @IsNumber()
  @IsNotEmpty()
  precioUnitario!: number;
}
