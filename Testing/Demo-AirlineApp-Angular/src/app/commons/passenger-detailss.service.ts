import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Flight {
  id: string;
  flightName: string;
  ancillaryService: Ancillary;
  from: string;
  to: string;
}

export interface Passenger {
  id: string;
  passport: string,
  address: string,
  seatNumber: string;
  wheelchair: boolean;
  reserved: boolean;
  checkIn: boolean;
  withInfants: boolean;
  name: string;
  inFlightShop: boolean;
  flightId: string;
}

export interface Ancillary {
  meal: string;
  weight: string;

}

@Injectable({
  providedIn: 'root'
})
export class PassengerDetailssService {
  public allPassenger: Passenger[] = [];
  public allPassengerWithAancillary: Passenger[] = [];
  public selectedFlightId: string;

  public myData: BehaviorSubject<Passenger[]> = new BehaviorSubject<Passenger[]>([]);

  public currentSelectedFlight: BehaviorSubject<Flight> = new BehaviorSubject<Flight>(null);

  constructor() { }
}
