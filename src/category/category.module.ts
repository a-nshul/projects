import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { category } from 'src/db/entities/product-category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

//by Nitin Dhakad
@Module({
  imports:[ TypeOrmModule.forFeature([category])],
  exports:[CategoryService],
  providers: [CategoryService],
  controllers: [CategoryController]
})
export class CategoryModule {}
