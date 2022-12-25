import { ApiProperty } from '@nestjs/swagger';

//by Anshul upadhyay
export class PaymentReqDto {


    public constructor(init?: Partial<PaymentReqDto>) {
        Object.assign(this, init);
    }
   
    
    @ApiProperty()
    Id: number;
  
    @ApiProperty()
    Amount: string;
  
    @ApiProperty()
    Provider: string;
  
    @ApiProperty()
    Status:string;
  
    @ApiProperty()
    CreatedAt: Date;
  
    @ApiProperty()
    UpdatedAt:Date;
  

}


export class SignUpResDto {
    
    public constructor(init?: Partial<SignUpResDto>) {
        Object.assign(this, init);
    }

}


