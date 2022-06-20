import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingService } from './booking.service';
import { Booking } from './interfaces/booking.interface';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService:BookingService) {}

  @Post()
  async create(@Body() createCatDto: CreateBookingDto) {
    return this.bookingService.create(createCatDto);
  }

  @Get()
  async findAll(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }
}
