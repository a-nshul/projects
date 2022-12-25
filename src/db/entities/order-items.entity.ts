import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class OrderItems {
  public constructor(init?: Partial<OrderItems>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({nullable:true})
  OrderId: number;



  @Column({nullable:true})
  ProductId: number;

  @Column({nullable:true})
  Quantity: number;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
  CreatedAt?: Date;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
  UpdatedAt?: Date;
}




