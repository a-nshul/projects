
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { category } from './product-category.entity';
import { inventory } from './product-inventory.entity';

// by Nitin dhakad
@Entity()
export class product {
  public constructor(init?: Partial<product>) {
    Object.assign(this, init);
  }
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({nullable:true})
  Name: string;

  @Column({nullable:true})
  Desc: string;

  @Column({nullable:true})
  SKU: string;

  @Column({ nullable: true })
  CategoryId: number;

  @Column({ nullable: true })
  InventoryId: number;

  @Column({nullable:true})
  Price: string;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
  CreatedAt?: Date;

  @Column({ type: "timestamp", default: () => 'CURRENT_TIMESTAMP' })
  UpdatedAt?: Date;


  @ManyToOne(type => inventory, inventory => inventory.Products)
  @JoinColumn({ name: "InventoryId" })
  Inventory: inventory;

  @ManyToOne(type => category, cat => cat.Products)
  @JoinColumn({ name: "CategoryId" })
  Category: category;


}




