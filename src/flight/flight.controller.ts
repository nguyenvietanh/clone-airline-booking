import { Controller, Post, Body } from '@nestjs/common';
import { FlightService } from './flight.service';

@Controller('flight')
export class FlightController {
  constructor(private readonly flightService: FlightService) {}
  @Post()
  async createFlight(
    @Body('departureDate') departureDate: string,
    @Body('departureAirportCode') departureAirportCode: string,
    @Body('departureAirportName') departureAirportName: string,
    @Body('departureLocale') departureLocale: string,
    @Body('departureCity') departureCity: string,
    @Body('arrivalDate') arrivalDate: Date,
    @Body('arrivalAirportCode') arrivalAirportCode: string,
    @Body('arrivalAirportName') arrivalAirportName: string,
    @Body('arrivalCity') arrivalCity: string,
    @Body('arrivalLocale') arrivalLocale: string,
    @Body('ticketPrice') ticketPrice: number,
    @Body('ticketCurrency') ticketCurrency: string,
    @Body('flightNumber') flightNumber: number,
    @Body('seatAllocation') seatAllocation: number,
    @Body('seatCapacity') seatCapacity: number,
  ) {
    const addFlight = await this.flightService.insertFlight(
      departureDate,
      departureAirportCode,
      departureAirportName,
      departureLocale,
      departureCity,
      arrivalDate,
      arrivalAirportCode,
      arrivalAirportName,
      arrivalCity,
      arrivalLocale,
      ticketPrice,
      ticketCurrency,
      flightNumber,
      seatAllocation,
      seatCapacity,
    );
    return addFlight;
  }
}
