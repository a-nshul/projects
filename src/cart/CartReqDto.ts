import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CartReqDto {


    public constructor(init?: Partial<CartReqDto>) {
        Object.assign(this, init);
    }

    @ApiProperty({ nullable: true })
    ProductId: number;

    @ApiProperty()
    Quantity: number;

    @ApiProperty()
    created_at?: Date;

    @ApiProperty()
    updated_at?: Date;
}


export class SignUpResDto {

    public constructor(init?: Partial<SignUpResDto>) {
        Object.assign(this, init);
    }

}


