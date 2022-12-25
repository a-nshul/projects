import { IsEmail } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class customer {
  public constructor(init?: Partial<customer>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({nullable:true})
  FirstName: string;

  @Column({nullable:true})
  LastName: string;

  @IsEmail()
  @Column({nullable:true})
  Email: string;

  @Column({nullable:true})
  Phone: number;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
  CreatedAt?: Date;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
  UpdatedAt?: Date;
}
