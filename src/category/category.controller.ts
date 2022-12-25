import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { request } from 'http';
import { category } from 'src/db/entities/product-category.entity';
import { CategoryReqDto } from './category.dto';
import { CategoryService } from './category.service';

//by Nitin Dhakad
@Controller('category')
export class CategoryController {

    constructor(private categoryService: CategoryService) { }


    @Get()
    async index(): Promise<category[]> {
        return await this.categoryService.findAll();

    }


    @Post()
    async create(@Body() categoryData: CategoryReqDto): Promise<any> {
        console.log("i am here!!!!!!!!")
        return await this.categoryService.create(categoryData);
    }

    @Put(':id/update')
    async update(@Param('id') id, @Body() categoryData: CategoryReqDto): Promise<any> {
       // customerData.id = Number(id);
        console.log('Update #' + categoryData)
        return  await this.categoryService.update(id,categoryData);
    }


    @Delete(':id/delete')
    async delete(@Param('id') id): Promise<any> {
        return await this.categoryService.delete(id);
    }

}
