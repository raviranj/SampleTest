import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Flight, Passenger } from './passenger-detailss.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

const httpHaders = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  serverUrl = "http://localhost:3000/";
  constructor(private _httpClient: HttpClient) { }

  getSelectedFLight(id: string) {
    return this._httpClient.get<Flight>(this.serverUrl + "/" + id);
  }

  getAllFlights(): Observable<Flight[]> {
    return this._httpClient.get<Flight[]>(this.serverUrl + 'flightList').pipe(
      tap((airline) => {
        return airline;
      })
    );
  }
  //http://localhost:3000/passengerList?flightId_like=Vistara-1

  getPassengerList(flightId: string): Observable<Passenger[]> {
    return this._httpClient.get<Passenger[]>(this.serverUrl + 'passengerList?flightId_like=' + flightId).pipe(
      tap((passengerList) => {
        return passengerList;
      })
    );
  }

  updatePassengerSeat(passengerId: string, passenger: Passenger): Observable<Passenger> {
    return this._httpClient.put<Passenger>(this.serverUrl + "passengerList/" + passengerId, passenger).pipe(tap((passenger) => {
      return passenger;
    }));
  }
  addPassenger(passenger: Passenger): Observable<Passenger> {
    return this._httpClient.post<Passenger>(this.serverUrl + "passengerList/", passenger, httpHaders).pipe(tap((pass) => {
      return pass;
    }));
  }
  updateAncillary(flightId: string, flight: Flight): Observable<Flight> {
    return this._httpClient.put<Flight>(this.serverUrl + 'flightList/' + flightId, flight).pipe(tap((flight) => {
      return flight;
    }));
  }

  deletePassenger(flightId: string): Observable<Passenger> {
    return this._httpClient.delete<Passenger>(this.serverUrl + 'passengerList/' + flightId).pipe(tap((passenger) => { return passenger; }));
  }
}
