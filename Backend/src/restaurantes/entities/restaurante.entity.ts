import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Restaurante {
  @PrimaryGeneratedColumn()
  id!: number; 

  @Column()
  nombre!: string; 

  @Column()
  direccion!: string; 

  @Column({ default: true })
  estaAbierto!: boolean; 
}