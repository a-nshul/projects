import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { orderDetails } from 'src/db/entities/address-order-details.entity';
import { OrderService } from './order.service';

@Controller('orderDetails')
export class OrderController {
    
    constructor(private orderService: OrderService){}
@Get()
  async index(): Promise<orderDetails[]> {
   return await this.orderService.findAll();
   
   }

 
 @Post()
    async create(@Body() orderData: orderDetails): Promise<any> {
      return  await this.orderService.create(orderData);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() orderData: orderDetails): Promise<any> {
        orderData.Id = Number(id);
        console.log('Update #' + orderData.Id)
        return await this.orderService.update(orderData);
    }  


    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return await this.orderService.delete(id);
    }  

}