import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { paymentDetails } from 'src/db/entities/address-payment-details.entity';
import { PaymentReqDto } from 'src/payment/payment.dto';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class PaymentService {

    constructor(
        @InjectRepository(paymentDetails)
        private PaymentRepository: Repository<paymentDetails>,
    ) { }

    async findAll(): Promise<paymentDetails[]> {
        return await this.PaymentRepository.find();
    }

    async create(payment: PaymentReqDto): Promise<paymentDetails> {
        const paymentData = await this.PaymentRepository.save(payment)
        return paymentData
        //return await this.CustomerRepository.save(Customer);
    }

    async update(id: number, paymentReqObj: PaymentReqDto): Promise<UpdateResult> {
        return await this.PaymentRepository.update(id, paymentReqObj);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.PaymentRepository.delete(id);
    }
}

