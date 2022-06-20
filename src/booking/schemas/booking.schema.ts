import * as mongoose from 'mongoose';

export const BookingSchema = new mongoose.Schema({
	status: {
		type: String,
		enum: ['UNCONFIRMED', 'CONFIRMED', 'CANCELLED']
	},
	outboundFlight: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Flight'
	},
	paymentToken: {
		type: String,
	},
	checkedIn: {
		type: Boolean,
	},
	customer: {
		type: String,
	},
	createdAt: {
		type: String,
	},
	bookingReference: {
		type: String,
	},
	updatedAt: {
		type: Date
	},
});
