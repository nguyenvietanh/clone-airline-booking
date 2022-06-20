import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { FlightsModule } from './flights/flights.module';

@Module({
  imports: [
    FlightsModule,
    MongooseModule.forRoot('mongodb://localhost/clone_air_line_booking'),
  ],
})
export class AppModule {}
