import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatalogService } from './catalog/catalog.service';
import { BookingService } from './booking/booking.service';
import { PaymentService } from './payment/payment.service';
import { LoyaltyService } from './loyalty/loyalty.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    CatalogService,
    BookingService,
    PaymentService,
    LoyaltyService,
  ],
})
export class AppModule {}
