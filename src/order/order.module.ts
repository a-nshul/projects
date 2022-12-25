import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { orderDetails } from 'src/db/entities/address-order-details.entity';


@Module({
  imports:[ TypeOrmModule.forFeature([orderDetails])],
  exports:[OrderService],
  providers: [OrderService],
  controllers: [OrderController]
})
export class OrderModule {}
