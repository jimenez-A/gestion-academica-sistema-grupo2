import { IsString, IsNotEmpty } from 'class-validator';

export class CreateMesaDto {
  @IsString()
  @IsNotEmpty()
  numero!: string;

  @IsString()
  @IsNotEmpty()
  capacidad!: string;
}
