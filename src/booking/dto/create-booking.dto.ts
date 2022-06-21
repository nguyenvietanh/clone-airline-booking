import { Schema } from 'mongoose';

export class CreateBookingDto {
  readonly status: BookingStatus;
  readonly paymentToken: string;
  readonly checkedIn: boolean;
  readonly customer: string;
  // readonly outboundFlight: { type: Schema.Types.ObjectId, ref: 'Flight' };
}
enum BookingStatus {
  UNCONFIRMED,
  CONFIRMED,
  CANCELLED,
}
