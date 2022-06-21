import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingService } from './booking.service';
import { BookingI } from './interfaces/booking.interface';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post('/create')
  async create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @Get()
  async findAll(): Promise<BookingI[]> {
    return this.bookingService.findAll();
  }
}
