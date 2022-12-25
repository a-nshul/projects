import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product } from 'src/db/entities/product.entity';

//by Nitin Dhakad
@Module({
  imports:[ TypeOrmModule.forFeature([product])],
  exports:[ProductService],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}
