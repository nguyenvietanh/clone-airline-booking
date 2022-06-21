import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { FlightsService } from './flights.service';

@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}
  @Post('/create')
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
    @Body('seatCapacity') seatCapacity: number,
  ) {
    const addFlight = await this.flightsService.insertFlight(
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
      seatCapacity,
    );
    return addFlight;
  }
  @Get()
  async getAllFlights() {
    const flights = await this.flightsService.getFlights();
    return flights;
  }

  @Get(':id')
  getFlight(@Param('id') flightId: string) {
    return this.flightsService.getSingleFlight(flightId);
  }

  @Post('/search')
  getFlightBySchedule(
    @Body('departureAirportCode') departureAirportCode: string,
    @Body('arrivalAirportCode') arrivalAirportCode: string,
    @Body('departureDate') departureDate: string,
  ) {
    console.log(departureAirportCode);
    console.log(arrivalAirportCode);
    console.log(departureDate);
    return this.flightsService.getFlightBySchedule(
      departureAirportCode,
      arrivalAirportCode,
      departureDate,
    );
  }

  @Put(':id')
  async updateProduct(
    @Param('id') flightId: string,
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
    @Body('seatCapacity') seatCapacity: number,
  ) {
    await this.flightsService.updateFlight(
      flightId,
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
      seatCapacity,
    );
  }
  @Delete(':id')
  async removeFlight(@Param('id') flightId: string) {
    await this.flightsService.deleteFlight(flightId);
  }
}
