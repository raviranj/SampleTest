import { Component, OnInit } from '@angular/core';
import { PassengerDetailssService, Passenger, Flight } from '../commons/passenger-detailss.service';
import { NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { FlightState } from '../flight-state/flight.state';
import { ActivatedRoute, Router } from '@angular/router';
import * as flightAction from '../flight-state/flight.action';
@Component({
  selector: 'app-change-ancillary-service',
  templateUrl: './change-ancillary-service.component.html',
  styleUrls: ['./change-ancillary-service.component.css']
})
export class ChangeAncillaryServiceComponent implements OnInit {
  flightObj = {
    "id": "",
    "flightName": "",
    "from": "",
    "to": "",
    "ancillaryService": {
      "meal": "",
      "weight": ""
    }
  };

  filteredData$: Passenger[] = [];
  // @Input()
  // ancilary:Passenger[] = [];
  currentSelectedFlight: Flight;
  visibleSeatMap: boolean = false;
  passengerList: Passenger[];
  passenger: Passenger;

  ///////////////////////////////////////////////
  flights$: Observable<any>;
  flights: Flight[];
  selectedFlightId: string;
  selectedFlight: Flight;

  constructor(private passengerService: PassengerDetailssService, private modalService: NgbModal, private store: Store<any>, private route: ActivatedRoute, private routers: Router) { }

  ngOnInit(): void {

    this.selectedFlightId = this.route.snapshot.params['flightId'];
    this.flights$ = this.store.select('flightState');
    this.flights$.subscribe((state: FlightState) => (this.flights = state.flights));
    this.selectedFlight = this.flights.find(x => x.id === this.selectedFlightId);
    this.flightObj = { ...this.selectedFlight };

  }

  // updateAncillary(passengerForm: NgForm) {
  //   //this.dialog.open()
  //   const form=passengerForm.value;

  //   // this.passengerObj = passenger;
  //   // this.dbService.updatePassengerById(this.passengerObj.id, this.passengerObj);
  // }
  updateAncillary(selectedFlight: NgForm) {

    this.flightObj = { ...this.selectedFlight };
    this.flightObj.ancillaryService = selectedFlight.value;
    this.routers.navigateByUrl('/dashboard');
    this.store.dispatch(new flightAction.EditFlightAction(this.flightObj.id, this.flightObj));
  }
  showSeatMap(passengerInfo: Passenger[]) {
    this.visibleSeatMap = !this.visibleSeatMap;
    this.passengerList = passengerInfo;
  }

}
