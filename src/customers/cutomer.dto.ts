import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CustomerReqDto {


    public constructor(init?: Partial<CustomerReqDto>) {
        Object.assign(this, init);
    }
   
    
   
    @ApiProperty()
    firstName: string;

   @ApiProperty()
   lastName:string;


    @ApiProperty()
    email:string;


    @ApiProperty()
    phone:number;

    @ApiProperty()
    created_at?:Date;

    @ApiProperty()
    updated_at?:Date;


}


export class SignUpResDto {
    
    public constructor(init?: Partial<SignUpResDto>) {
        Object.assign(this, init);
    }

}

function PrimaryGenerated() {
    throw new Error('Function not implemented.');
}
