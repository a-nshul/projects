import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { inventory } from 'src/db/entities/product-inventory.entity';
import { InventoryReqDto } from './inventory.dto';
import { InventoryService } from './inventory.service';

//by Nitin Dhakad
@Controller('inventory')
export class InventoryController {

    constructor(private inventoryService: InventoryService) { }


    @Get()
    async index(): Promise<inventory[]> {
        return await this.inventoryService.findAll();

    }


    @Post()
    async create(@Body() inventoryData: InventoryReqDto): Promise<any> {
        return await this.inventoryService.create(inventoryData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() inventoryData: InventoryReqDto): Promise<any> {
       // customerData.id = Number(id);
        console.log('Update #' + inventoryData)
        return  await this.inventoryService.update(id,inventoryData);
    }


    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return await this.inventoryService.delete(id);
    }

}
