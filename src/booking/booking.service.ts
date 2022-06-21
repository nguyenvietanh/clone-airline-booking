import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateBookingDto } from './dto/create-booking.dto';
import { BookingI } from './interfaces/booking.interface';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel('Booking') private readonly bookingModel: Model<BookingI>,
  ) {}

  async create(CreateBookingDto: CreateBookingDto): Promise<BookingI> {
    const createBooking = this.bookingModel.create(CreateBookingDto);
    return createBooking;
  }

  async findAll(): Promise<BookingI[]> {
    return this.bookingModel.find().exec();
  }
}
