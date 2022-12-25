import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { product } from './product.entity';

//by Nitin Dhakad
@Entity()
export class inventory {
  public constructor(init?: Partial<inventory>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({nullable:true})
  Name: string;

  @Column({nullable:true})
  Desc: string;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP', nullable: true })
  CreatedAt?: Date;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP', nullable: true })
  UpdatedAt?: Date;

  @OneToMany(type => product, product =>product.Inventory)
  Products: product[];


  

}







