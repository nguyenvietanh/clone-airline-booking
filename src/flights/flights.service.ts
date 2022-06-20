import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Flight } from './flight.model';

@Injectable()
export class FlightsService {
  constructor(
    @InjectModel('Flight') private readonly flightModel: Model<Flight>,
  ) {}
  // create a flight
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
      seatCapacity: seatCapacity,
    });
    const result = await newFight.save();
    console.log(result);
    return result;
  }
  //get all flight
  async getFlights() {
    const flights = await this.flightModel.find().exec();
    return flights;
  }
  //get a single flight
  async getSingleFlight(flightId: string) {
    const flight = await this.findFlight(flightId);
    return { flight };
  }
  //update a flight
  async updateFlight(
    flightId: string,
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
    seatCapacity: number,
  ) {
    const updateFlight = await this.findFlight(flightId);
    if (departureDate) {
      updateFlight.departureDate = departureDate;
    }
    if (departureAirportCode) {
      updateFlight.departureAirportCode = departureAirportCode;
    }
    if (departureAirportName) {
      updateFlight.departureAirportName = departureAirportName;
    }
    if (departureLocale) {
      updateFlight.departureLocale = departureLocale;
    }
    if (departureCity) {
      updateFlight.departureCity = departureCity;
    }
    if (arrivalDate) {
      updateFlight.arrivalDate = arrivalDate;
    }
    if (arrivalAirportCode) {
      updateFlight.arrivalAirportCode = arrivalAirportCode;
    }
    if (arrivalAirportName) {
      updateFlight.arrivalAirportName = arrivalAirportName;
    }

    if (arrivalCity) {
      updateFlight.arrivalCity = arrivalCity;
    }

    if (arrivalLocale) {
      updateFlight.arrivalLocale = arrivalLocale;
    }

    if (ticketPrice) {
      updateFlight.ticketPrice = ticketPrice;
    }

    if (ticketCurrency) {
      updateFlight.ticketCurrency = ticketCurrency;
    }

    if (flightNumber) {
      updateFlight.flightNumber = flightNumber;
    }

    if (seatCapacity) {
      updateFlight.seatCapacity = seatCapacity;
    }
    updateFlight.save();
  }
  //function find flight in database
  private async findFlight(id: string): Promise<Flight> {
    let flight;
    try {
      flight = await this.flightModel.findById(id);
    } catch (err) {
      throw new NotFoundException('Not found flight');
    }
    if (!flight) {
      throw new NotFoundException('Not found flight');
    }
    return flight;
  }
}
