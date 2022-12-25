import { ApiProperty } from '@nestjs/swagger';

//by Nitin Dhakad
export class CategoryReqDto {


    public constructor(init?: Partial<CategoryReqDto>) {
        Object.assign(this, init);
    }
   
    
    @ApiProperty()
    Name: string;
  
    @ApiProperty()
    Desc: string;
  
   

}
