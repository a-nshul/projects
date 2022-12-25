import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cartItems } from 'src/db/entities/cart-items.entity';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CartReqDto } from './CartReqDto';

@Injectable()
export class CartService {
    constructor(
        @InjectRepository(cartItems)
        private CartRepository: Repository<cartItems>,
        private dataSource: DataSource
    ) { }
    async findAll(): Promise<cartItems[]> {
        return await this.CartRepository.find();
    }

    async create(cart: CartReqDto): Promise<cartItems> {
        const cartData = await this.CartRepository.save(cart)
        return cartData
    }
        //return await this.CustomerRepository.save(Customer);
        async update(cart: cartItems): Promise<UpdateResult> {
            return await this.CartRepository.update(cart.Id, cart);
        }
    
        async delete(id): Promise<DeleteResult> {
            return await this.CartRepository.delete(id);
        }
    }
    
    



