import { ApiProperty } from '@nestjs/swagger';
export class OrderReqDto {


    public constructor(init?: Partial<OrderReqDto>) {
        Object.assign(this, init);
    }
   
    
    @ApiProperty()
    Id: number;
  
    @ApiProperty()
    CustomerId:number;
  
    @ApiProperty()
    PaymentId:number;
  
    @ApiProperty()
    Total:string;
  
    @ApiProperty()
    AccountNumber:number;
  
    @ApiProperty()
    Expire:Date;
   @ApiProperty()
   PaymentType:string;
   @ApiProperty()
   Provider:string;
}


export class SignUpResDto {
    
    public constructor(init?: Partial<SignUpResDto>) {
        Object.assign(this, init);
    }

}


