import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { address } from './address.entity';


@Entity()
export class paymentDetails {
  PaymentId: any;
  public constructor(init?: Partial<paymentDetails>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({nullable:true})
  OrderId: number;



  @Column({nullable:true})
  Amount: string;

  @Column({nullable:true})
  Provider:string;

  @Column({nullable:true})
  Status:string;


  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
  CreatedAt?: Date;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
  UpdatedAt?: Date;

  
  @OneToMany(type => address, address =>address.PaymentDetails)
  Products: address[];
}




