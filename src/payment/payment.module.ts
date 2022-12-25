import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { paymentDetails } from 'src/db/entities/address-payment-details.entity';


@Module({
  imports:[ TypeOrmModule.forFeature([paymentDetails])],
  exports:[PaymentService],
  providers: [PaymentService],
  controllers: [PaymentController]
})
export class PaymentModule {}
