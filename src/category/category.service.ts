import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { category } from 'src/db/entities/product-category.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { CategoryReqDto } from './category.dto';

//by Nitin Dhakad
@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(category)
        private CategoryRepository: Repository<category>,
    ) { }

    async  findAll(): Promise<category[]> {
        return await this.CategoryRepository.find();
    }

    async  create(category: CategoryReqDto): Promise<category> {
       const categoryData = await this.CategoryRepository.save(category)
       return categoryData
        //return await this.CustomerRepository.save(Customer);
    }

    async update(id:number,categoryReqObj: CategoryReqDto): Promise<UpdateResult> {
        return await this.CategoryRepository.update(id, categoryReqObj);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.CategoryRepository.delete(id);
}
}
