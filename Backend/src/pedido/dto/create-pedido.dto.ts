import { IsString, IsNotEmpty } from 'class-validator';

export class CreatePedidoDto {
  @IsString()
  @IsNotEmpty()
  estado!: string;
}
