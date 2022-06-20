import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { FlightsService } from './flights.service';
import { FlightsController } from './flights.controller';
import { FlightSchema } from './flight.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Flight', schema: FlightSchema }]),
  ],
  controllers: [FlightsController],
  providers: [FlightsService],
})
export class FlightsModule {}
