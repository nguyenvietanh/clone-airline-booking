import { Module } from '@nestjs/common';
import { BookingModule } from './booking/booking.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [BookingModule,
    MongooseModule.forRoot('mongodb://localhost/airline')],
  controllers: [],
  providers: [
    
  ],
})
export class AppModule { }
