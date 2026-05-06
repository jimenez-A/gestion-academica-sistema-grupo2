import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFacturaDto {
  @IsString()
  @IsNotEmpty()
  numeroFactura!: string;

  @IsNumber()
  @IsNotEmpty()
  total!: number;
}
