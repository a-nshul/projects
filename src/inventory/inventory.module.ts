import { Module } from '@nestjs/common';
import { InventoryController } from './inventory.controller';
import { InventoryService } from './inventory.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { inventory } from 'src/db/entities/product-inventory.entity';

//by Nitin Dhakad
@Module({
  imports:[ TypeOrmModule.forFeature([inventory])],
  exports:[InventoryService],
  controllers: [InventoryController],
  providers: [InventoryService]
})
export class InventoryModule {}
