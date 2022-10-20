import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'tb_produtos' })
export class Lista {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  titilo: string;

  @IsNotEmpty()
  @Column({ length: 300, nullable: false })
  descricao: string;

  @IsNotEmpty()
  @Column('boolean')
  estado: boolean
}