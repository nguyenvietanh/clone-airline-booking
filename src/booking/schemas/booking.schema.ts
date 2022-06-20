import * as mongoose from 'mongoose';

export const BookingSchema = new mongoose.Schema({
	id: ID!,
	status: BookingStatus!,
	outboundFlight: Flight!,
	paymentToken: string!,
	checkedIn: boolean,
	customer: string,
	createdAt: string,
	bookingReference: string,
	updatedAt: AWSDateTime!,
});
