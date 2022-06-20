import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from './interfaces/booking.interface';

@Injectable()
export class BookingService {
  constructor(@Inject('BOOKING_MODEL') private readonly bookingModel: Model<Booking>) {}

  async create(CreateBookingDto: CreateBookingDto): Promise<Booking> {
    const createBooking = this.bookingModel.create(CreateBookingDto);
    return createBooking;
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingModel.find().exec();
  }
}
