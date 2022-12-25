import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { orderDetails } from 'src/db/entities/address-order-details.entity';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class OrderService {
    
    constructor(
        @InjectRepository(orderDetails)
        private CustomerRepository: Repository<orderDetails>,
        private dataSource: DataSource 
    ) { }

    async  findAll(): Promise<orderDetails[]> {
        return await this.CustomerRepository.find();
    }

    async  create(orderDetails: orderDetails): Promise<orderDetails> {
       const orderDetailsData = await this.CustomerRepository.save(orderDetails)
       return orderDetailsData
        //return await this.CustomerRepository.save(Customer);
    }

    async update(orderDetails: orderDetails): Promise<UpdateResult> {
        return await this.CustomerRepository.update(orderDetails.Id, orderDetails);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.CustomerRepository.delete(id);
}
}