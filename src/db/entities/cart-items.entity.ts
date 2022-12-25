import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class cartItems {
  public constructor(init?: Partial<cartItems>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({nullable:true})
  ProductId: number;

  @Column({nullable:true})
  Quantity: number;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
  CreatedAt?: Date;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
  UpdatedAt?: Date;
}




