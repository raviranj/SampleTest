import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Passenger } from 'src/app/commons/passenger-detailss.service';
import { PassengerState } from 'src/app/passenger-state/passenger.state';
import { Observable } from 'rxjs';
import * as passengerAction from '../../passenger-state/passenger.action';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { FormArray, NgForm } from '@angular/forms';
import { MAT_CHECKBOX_CLICK_ACTION } from '@angular/material/checkbox';
@Component({
  selector: 'app-edit-passenger',
  templateUrl: './edit-passenger.component.html',
  styleUrls: ['./edit-passenger.component.css'],
  providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'noop' },]
})
export class EditPassengerComponent implements OnInit {
  passengerInfo: Passenger;
  passengers$: Observable<any>;
  selectedFlightId: string;
  passengers: Passenger[];
  enableEdit = false;
  enableEditIndex = null;
  isPopupOpened = false;

  controls: FormArray;
  openEditPassenger = false;
  passengerName: string;

  passengerObj = {
    "id": "",
    "flightId": "",
    "seatNumber": "",
    "wheelchair": false,
    "reserved": false,
    "checkIn": true,
    "withInfants": false,
    "name": "",
    "inFlightShop": false,
    "address": "",
    "passport": ""
  };

  constructor(private route: ActivatedRoute, private store: Store<any>, private modalService: NgbModal, private dialog?: MatDialog) {

  }

  ngOnInit(): void {
    this.selectedFlightId = this.route.snapshot.params['flightId'];
    this.passengers$ = this.store.select('passengerState');
    this.getPassengerList(this.selectedFlightId);
    this.passengers$.subscribe((state: PassengerState) => (this.passengers = state.passengers));
  }

  getPassengerList(selectedFlightId: string) {
    this.store.dispatch(new passengerAction.LoadPassengerAction(selectedFlightId));
  }

  enableEditMethod(e, i) {
    this.enableEdit = true;
    this.enableEditIndex = i;
  }
  updatePassengerDetails(passengerDetails: Passenger) {
  }

  addPassenger() {

    this.passengerObj = {
      "id": "",
      "flightId": "",
      "seatNumber": "",
      "wheelchair": false,
      "reserved": true,
      "checkIn": false,
      "withInfants": false,
      "name": "",
      "inFlightShop": false,
      "address": "",
      "passport": ""
    };
    this.openEditPassenger = false;
  }

  editPassenger(passengerInfo: Passenger) {
    this.passengerObj = { ...passengerInfo };
    this.openEditPassenger = true;
  }
  // deletePassenger(passenger:Passenger){
  //   console.log(passenger);
  //   this.store.dispatch(new passengerAction.DeletePassengerAction(passenger.id));
  //   this.passengers$.subscribe((state: PassengerState) => (this.passengers = state.passengers));
  // }

  updatePassenger(passengerForm: NgForm) {
    if (passengerForm.valid && passengerForm.value) {
      if (this.passengerObj.id.length > 0) {
        this.store.dispatch(new passengerAction.EditPassengerAction(this.passengerObj.id, this.passengerObj));
      } else if (passengerForm.value.name != "" && passengerForm.value.name != null) {
        this.passengerObj.flightId = this.selectedFlightId;
        this.passengerObj.reserved = true;
        this.store.dispatch(new passengerAction.AddPassengerAction(this.passengerObj));
        this.passengers$.subscribe((state: PassengerState) => (this.passengers = state.passengers));
      }
    }
    this.passengers$.subscribe((state: PassengerState) => (this.passengers = state.passengers));
    // $("#myModal").hide();
    // $(".modal-backdrop.fade.show").hide();
  }
  search() {
    if (this.passengerName != "") {
      this.passengers = this.passengers.filter(res => {
        return res.name.toLocaleLowerCase().match(this.passengerName.toLocaleLowerCase())
      });
    } else if (this.passengerName == "") {
      this.ngOnInit();
    }

  }
}


