import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingService } from './booking/booking.service';
import { BookingModule } from './booking/booking.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [BookingModule,
    MongooseModule.forRoot('mongodb://localhost/airline')],
  controllers: [AppController],
  providers: [
    AppService,
    BookingService,
  ],
})
export class AppModule { }
