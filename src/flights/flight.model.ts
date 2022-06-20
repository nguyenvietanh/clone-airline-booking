import * as mongoose from 'mongoose';

export interface Flight extends mongoose.Document {
  id: string;
  departureDate: string;
  departureAirportCode: string;
  departureAirportName: string;
  departureLocale: string;
  departureCity: string;
  arrivalDate: Date;
  arrivalAirportCode: string;
  arrivalAirportName: string;
  arrivalCity: string;
  arrivalLocale: string;
  ticketPrice: number;
  ticketCurrency: string;
  flightNumber: number;
  seatCapacity: number;
}
export const FlightSchema = new mongoose.Schema({
  departureDate: { type: String, required: true },
  departureAirportCode: { type: String, required: true },
  departureAirportName: { type: String, required: true },
  departureLocale: { type: String, required: true },
  departureCity: { type: String, required: true },
  arrivalDate: { type: Date, required: true },
  arrivalAirportCode: { type: String, required: true },
  arrivalAirportName: { type: String, required: true },
  arrivalCity: { type: String, required: true },
  arrivalLocale: { type: String, required: true },
  ticketPrice: { type: Number },
  ticketCurrency: { type: String, required: true },
  flightNumber: { type: Number },
  seatCapacity: { type: Number },
});
