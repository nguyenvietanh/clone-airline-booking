export class CreateBookingDto {
	id: ID,
	status: BookingStatus,
	paymentToken: string!,
	checkedIn: boolean,
	customer: string,
	bookingOutboundFlightId: ID!,
  }
  