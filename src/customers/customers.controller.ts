import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { customer } from 'src/db/entities/customer.entity';
import { CustomersService } from './customers.service';

@Controller('customers')
export class CustomersController {
    
    constructor(private customersService: CustomersService){}
@Get()
  async index(): Promise<customer[]> {
   return await this.customersService.findAll();
   
   }

 
 @Post()
    async create(@Body() customerData: customer): Promise<any> {
      return  await this.customersService.create(customerData);
    }  
    
    @Put(':id/update')
    async update(@Param('id') id, @Body() customerData: customer): Promise<any> {
        customerData.Id = Number(id);
        console.log('Update #' + customerData.Id)
        return await this.customersService.update(customerData);
    }  


    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
      return await this.customersService.delete(id);
    }  

}