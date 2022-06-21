import { Schema, Document } from 'mongoose';

export interface BookingI extends Document {
  status: BookingStatus;
  outboundFlight: { type: Schema.Types.ObjectId; ref: 'Flight' };
  paymentToken: string;
  checkedIn: boolean;
  customer: string;
  createdAt: string;
  bookingReference: string;
  updatedAt: Date;
}
enum BookingStatus {
  UNCONFIRMED,
  CONFIRMED,
  CANCELLED,
}
