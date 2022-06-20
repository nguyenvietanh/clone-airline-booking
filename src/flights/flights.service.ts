import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Flight } from './flight.model';

@Injectable()
export class FlightsService {
  constructor(
    @InjectModel('Flight') private readonly flightModel: Model<Flight>,
  ) {}

  async insertFlight(
    departureDate: string,
    departureAirportCode: string,
    departureAirportName: string,
    departureLocale: string,
    departureCity: string,
    arrivalDate: Date,
    arrivalAirportCode: string,
    arrivalAirportName: string,
    arrivalCity: string,
    arrivalLocale: string,
    ticketPrice: number,
    ticketCurrency: string,
    flightNumber: number,
    seatAllocation: number,
    seatCapacity: number,
  ) {
    const newFight = new this.flightModel({
      departureDate: departureDate,
      departureAirportCode: departureAirportCode,
      departureAirportName: departureAirportName,
      departureLocale: departureLocale,
      departureCity: departureCity,
      arrivalDate: arrivalDate,
      arrivalAirportCode: arrivalAirportCode,
      arrivalAirportName: arrivalAirportName,
      arrivalCity: arrivalCity,
      arrivalLocale: arrivalLocale,
      ticketPrice: ticketPrice,
      ticketCurrency: ticketCurrency,
      flightNumber: flightNumber,
      seatAllocation: seatAllocation,
      seatCapacity: seatCapacity,
    });
    const result = await newFight.save();
    console.log(result);
    return result;
  }
}
