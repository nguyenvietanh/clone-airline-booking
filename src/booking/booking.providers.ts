import { Mongoose } from 'mongoose';
import { BookingSchema } from './schemas/booking.schema';

export const bookingProviders = [
  {
    provide: 'BOOKING_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('Booking', BookingSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
