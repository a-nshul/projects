import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { customer } from 'src/db/entities/customer.entity';
import { DataSource, DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class CustomersService {
    
    constructor(
        @InjectRepository(customer)
        private CustomerRepository: Repository<customer>,
        private dataSource: DataSource 
    ) { }

    async  findAll(): Promise<customer[]> {
        return await this.CustomerRepository.find();
    }

    async  create(customer: customer): Promise<customer> {
       const customerData = await this.CustomerRepository.save(customer)
       return customerData
        //return await this.CustomerRepository.save(Customer);
    }

    async update(customer: customer): Promise<UpdateResult> {
        return await this.CustomerRepository.update(customer.Id, customer);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.CustomerRepository.delete(id);
}
}