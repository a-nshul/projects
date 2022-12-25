import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { paymentDetails } from 'src/db/entities/address-payment-details.entity';
import { PaymentReqDto } from './payment.dto';
import { PaymentService } from './payment.service';
@Controller('payment')
export class PaymentController {

    constructor(private paymentService: PaymentService) { }


    @Get()
    async index(): Promise<paymentDetails[]> {
        return await this.paymentService.findAll();

    }


    @Post()
    async create(@Body() paymentData: PaymentReqDto): Promise<any> {
        return await this.paymentService.create(paymentData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() paymentData: PaymentReqDto): Promise<any> {
       // customerData.id = Number(id);
        console.log('Update #' + paymentData)
        return  await this.paymentService.update(id,paymentData);
    }


    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return await this.paymentService.delete(id);
    }

}
