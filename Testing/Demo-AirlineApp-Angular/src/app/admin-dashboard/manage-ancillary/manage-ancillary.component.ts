import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightState } from 'src/app/flight-state/flight.state';
import { Flight } from 'src/app/commons/passenger-detailss.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as flightAction from '../../flight-state/flight.action';

@Component({
  selector: 'app-manage-ancillary',
  templateUrl: './manage-ancillary.component.html',
  styleUrls: ['./manage-ancillary.component.css']
})
export class ManageAncillaryComponent implements OnInit {

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


  selectedFlightId: string;
  flights$: Observable<any>;
  flights: Flight[];
  selectedFlight: Flight;
  ancillaryForm: FormGroup;

  constructor(private route: ActivatedRoute, private store: Store<any>, private routers: Router) { }

  ngOnInit(): void {

    this.selectedFlightId = this.route.snapshot.params['flightId'];
    this.flights$ = this.store.select('flightState');
    this.flights$.subscribe((state: FlightState) => (this.flights = state.flights));

    this.selectedFlight = this.flights.find(x => x.id === this.selectedFlightId);
     this.flightObj = JSON.parse(JSON.stringify(this.selectedFlight));

    this.ancillaryForm = new FormGroup({
      "flightName": new FormControl(""),
      "meal": new FormControl(""),
      "weight": new FormControl(""),

    });
    
    this.ancillaryForm.setValue({
      "flightName": this.flightObj.flightName,
      "meal": this.flightObj.ancillaryService.meal,
      "weight": this.flightObj.ancillaryService.weight
    });

  }
  onsubmit() {

    this.flightObj.ancillaryService.meal = this.ancillaryForm.get('meal').value;
    this.flightObj.ancillaryService.weight = this.ancillaryForm.get('weight').value;
 
    this.store.dispatch(new flightAction.EditFlightAction(this.flightObj.id, this.flightObj));
    this.routers.navigateByUrl('/adminDashboard');
  }

}
