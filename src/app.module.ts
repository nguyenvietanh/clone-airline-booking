import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';

@Module({
  imports: [
    FlightsModule,
    MongooseModule.forRoot('mongodb://localhost/clone_air_line_booking'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
