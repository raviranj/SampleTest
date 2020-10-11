import { Component, OnInit } from '@angular/core';
import { Flight } from '../commons/passenger-detailss.service';
import { Observable } from 'rxjs';
import { FlightState } from '../flight-state/flight.state';
import { SessionManagent } from '../commons/service.sessionManagment';
import { Store } from '@ngrx/store';
import * as flightAction from '../flight-state/flight.action';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  userName: string;
  flights$: Observable<any>;
  flights: Flight[];
  
  constructor( private session: SessionManagent, private store: Store<any>) { }

  ngOnInit(): void {
    this.userName = this.session.data['currentUser'];
    this.store.dispatch(new flightAction.LoadFlightAction());
    this.flights$ = this.store.select('flightState');
    this.flights$.subscribe((state: FlightState) => (this.flights = state.flights));
  }

}
