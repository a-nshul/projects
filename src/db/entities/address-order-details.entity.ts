import { Entity, Column, PrimaryGeneratedColumn, Double, OneToMany } from 'typeorm';
import { address } from './address.entity';
@Entity()
export class orderDetails {
    public constructor(init?: Partial<orderDetails>) {
        Object.assign(this, init);
      }
    @PrimaryGeneratedColumn()
    Id: number;

    @Column({nullable:true})
    CustomerId:number;

    @Column({nullable:true})
    PaymentId:number;

    @Column({nullable:true})
    Total:string;

    @Column({nullable:true})
    AccountNumber:string;

    @Column({nullable:true})
    Expire:Date;

    @Column({nullable:true})
    PaymentType:string;

    @Column({nullable:true})
    Provider:string;


  
      @Column( {type: "timestamp" , default: () =>'CURRENT_TIMESTAMP'})
      UpdatedAt?:Date;
      @OneToMany(type => address, address => address.orderDetails)
  Products: address[]
    }




