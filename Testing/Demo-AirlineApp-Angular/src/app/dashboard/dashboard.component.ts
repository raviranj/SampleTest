import { Component, OnInit } from '@angular/core';
import { Passenger, Flight } from '../commons/passenger-detailss.service';
import { Observable } from 'rxjs';
import { SocialAuthService } from 'angularx-social-login';
import { SessionManagent } from '../commons/service.sessionManagment';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as flightAction from '../flight-state/flight.action';
import { FlightState } from '../flight-state/flight.state';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  passengerObj = {
    "id": '',
    "seatNumber": "",
    "wheelchair": '',
    "reserved": '',
    "checkIn": '',
    "withInfants": '',
    "name": "",
    "inFlightShop": '',
    "location": ""
  };

  userName: string;
  photoUrl: string;

  pasengerList: Passenger[];
  passengers$: Observable<any>;
  passengers: Passenger[];

  flightName: string[];
  flights$: Observable<any>;
  flights: Flight[];

  constructor(private authService: SocialAuthService, private session: SessionManagent, private router: Router, private store: Store<any>) {}

  ngOnInit(): void {
    this.userName = this.session.data['currentUser'];
    this.photoUrl = this.session.data['photoUrl'];

    this.getFlights();
    this.flights$ = this.store.select('flightState');
    this.flights$.subscribe((state: FlightState) => (this.flights = state.flights));

  }

  getFlights() {
    this.store.dispatch(new flightAction.LoadFlightAction());
  }

  signOut(): void {
    this.authService.signOut();
    this.session.removeFromLocal();
    this.router.navigate(['/home']);
  }
}
