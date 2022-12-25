import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { cartItems } from 'src/db/entities/cart-items.entity';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
    constructor(private cartService: CartService) { }
    @Get()
    async index(): Promise<cartItems[]> {
        return await this.cartService.findAll();

    }


    @Post()
    async create(@Body() cartData: cartItems): Promise<any> {
        return this.cartService.create(cartData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() cartData: cartItems): Promise<any> {
        cartData.Id = Number(id);
        console.log('Update #' + cartData.Id)
        return this.cartService.update(cartData);
    }


    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return this.cartService.delete(id);
    }

}
