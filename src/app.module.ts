import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';

import { CategoryModule } from './category/category.module';
import { InventoryModule } from './inventory/inventory.module';
import { PaymentModule } from './payment/payment.module';
import { AddressController } from './address/address.controller';
import { AddressModule } from './address/address.module';
import { OrderController } from './order/order.controller';
import { OrderModule } from './order/order.module';


@Module({
  imports: [       
    TypeOrmModule.forRoot({
      type: 'mysql',
      host:'3.108.19.157',
      port: 3306,
      username:'interns',
      password:'interns@!@#$%^&*(',
      database: 'interns_ecommerce',
      entities: [],
      autoLoadEntities: true,
      synchronize: true,
    }), CustomersModule, ProductModule, OrderModule, CartModule,CategoryModule,InventoryModule, PaymentModule, AddressModule, OrderModule
  ],
  
  controllers: [AppController, AddressController, OrderController],
  providers: [AppService],
})

export class AppModule {}
