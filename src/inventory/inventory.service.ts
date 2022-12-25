import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { inventory } from 'src/db/entities/product-inventory.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InventoryReqDto } from './inventory.dto';

//by Nitin Dhakad
@Injectable()
export class InventoryService {

    constructor(
        @InjectRepository(inventory)
        private InventoryRepository: Repository<inventory>,
    ) { }

    async  findAll(): Promise<inventory[]> {
        return await this.InventoryRepository.find({ relations: ['Institute'] });
    }

    async  create(inventory: InventoryReqDto): Promise<inventory> {
       const inventoryData = await this.InventoryRepository.save(inventory)
       return inventoryData
        //return await this.CustomerRepository.save(Customer);
    }

    async update(id:number,inventoryReqObj: InventoryReqDto): Promise<UpdateResult> {
        return await this.InventoryRepository.update(id, inventoryReqObj);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.InventoryRepository.delete(id);
}
}
