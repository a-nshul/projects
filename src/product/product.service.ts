import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { product } from 'src/db/entities/product.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { ProductReqDto } from './product.dto';

//by Nitin Dhakad
@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(product)
        private ProductRepository: Repository<product>,
    ) { }

    async  findAll(): Promise<product[]> {
        return await this.ProductRepository.find({relations:["Category", "Inventory"]});
    }

    async  create(product: ProductReqDto): Promise<product> {
       const productData = await this.ProductRepository.save(product)
       return productData
        //return await this.CustomerRepository.save(Customer);
    }

    async update(id:number,productReqObj: ProductReqDto): Promise<UpdateResult> {
        return await this.ProductRepository.update(id, productReqObj);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.ProductRepository.delete(id);
}
}
