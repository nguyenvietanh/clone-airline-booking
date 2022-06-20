import { Document } from 'mongoose';

export interface Booking extends Document {
	id: ID!,
	status: BookingStatus!,
	outboundFlight: Flight!,
	paymentToken: string!,
	checkedIn: boolean,
	customer: string,
	createdAt: string,
	bookingReference: string,
	updatedAt: AWSDateTime!,
}
