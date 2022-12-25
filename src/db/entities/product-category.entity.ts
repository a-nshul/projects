import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { product } from './product.entity';

//by Nitin Dhakad
@Entity()
export class category {
  public constructor(init?: Partial<category>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({nullable:true})
  Name: string;

  @Column({nullable:true})
  Desc: string;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
  CreatedAt?: Date;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
  UpdatedAt?: Date;

  @OneToMany(type => product, product => product.Category)
  Products: product[]


}




