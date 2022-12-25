import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

//by Nitin Dhakad
export class ProductReqDto {


    public constructor(init?: Partial<ProductReqDto>) {
        Object.assign(this, init);
    }
   
    
    @ApiProperty({nullable:true})
    Name: string;
  
    @ApiProperty({nullable:true})
    Desc: string;
  
    @ApiProperty({nullable:true})
    SKU: string;
  
    @ApiProperty({ nullable: true })
    CategoryId: number;
  
    @ApiProperty({ nullable: true })
    InventoryId: number;
  
    @ApiProperty({nullable:true})
    Price: string;
  

}


export class SignUpResDto {
    
    public constructor(init?: Partial<SignUpResDto>) {
        Object.assign(this, init);
    }

}


