import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { cartItems } from 'src/db/entities/cart-items.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([cartItems]),
  ],
  providers: [CartService],
  controllers: [CartController]
})
export class CartModule {}
