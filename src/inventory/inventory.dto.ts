import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

//by Nitin Dhakad
export class InventoryReqDto {


    public constructor(init?: Partial<InventoryReqDto>) {
        Object.assign(this, init);
    }
   
    
    @ApiProperty()
    Name: string;
  
    @ApiProperty()
    Desc: string;
  
   

}


export class SignUpResDto {
    
    public constructor(init?: Partial<SignUpResDto>) {
        Object.assign(this, init);
    }

}


