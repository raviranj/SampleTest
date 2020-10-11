import { Component, OnInit, Input } from '@angular/core';
import { Passenger, Flight } from '../commons/passenger-detailss.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';
import { PassengerState } from '../passenger-state/passenger.state';
import * as passengerAction from '../passenger-state/passenger.action';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-passenger',
  templateUrl: './book-passenger.component.html',
  styleUrls: ['./book-passenger.component.css']
})

export class BookPassengerComponent implements OnInit {
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

  // seatRows: string[];
  // seatColumn: number[];
  seatMap: string[];

  @Input()
  allPassenger: Passenger[];


  visibleSeatMap: boolean = false;
  passengerData: Passenger;

  passengers$: Observable<any>;
  passengers: Passenger[];
  selectedFlightId: string;
  flights$: Observable<any>;
  flights: Flight[];
  tempPassenger: Passenger;
  showForm: boolean = false;
  errorMessage: string;
  isDisableSeat = false;

  constructor(private modalService: NgbModal, private store: Store<any>, private route: ActivatedRoute) {

    // this.seatColumn = Array(10).fill(1).map((x, i) => i);
    // this.seatRows = ['A', 'B'];
    this.seatMap = ['A0', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'A9', 'B0', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8', 'B9'];

  }

  ngOnInit(): void {
    this.selectedFlightId = this.route.snapshot.params['flightId'];
    this.getPassengerList(this.selectedFlightId);
    this.passengers$ = this.store.select('passengerState');
    this.passengers$.subscribe((state: PassengerState) => (this.passengers = state.passengers));
  }

  getPassengerList(selectedFlightId: string) {
    this.store.dispatch(new passengerAction.LoadPassengerAction(selectedFlightId));
  }

  checkInPassenger(flightName: string, passenger: Passenger) {
    this.passengerObj = passenger;
    this.passengerObj.checkIn = true;
  }
  showSeatMap(passengerInfo: Passenger) {
    this.visibleSeatMap = !this.visibleSeatMap;
    this.passengerData = passengerInfo;
  }
  openForm(passenger: Passenger, seatNumber: string) {
    this.showForm = true;

    this.tempPassenger = { ...passenger };
    this.tempPassenger.seatNumber = seatNumber;
  }

  colorCoading(seatNumber: string) {

    var currentPassenger = this.passengers.find(x => { if (x.seatNumber == seatNumber && x.checkIn == true) return x; });

    if (currentPassenger != null) {
      this.isDisableSeat = true;
      switch (currentPassenger.checkIn) {
        case currentPassenger.withInfants:
          return {
            btn: true,
            'btn-danger': true,
            'disabled': true,
            'isDisableSeat': true,
          };
        case currentPassenger.wheelchair:
          return {
            btn: true,
            'btn-secondary': true,
            'disabled': true,
            'isDisableSeat': true,
          };
        default:
          return {
            btn: true,
            'btn-success': true,
            'disabled': true,
            'isDisableSeat': true,
          };
      }
    }
    else {
      this.isDisableSeat = false;
      return {
        btn: true,
        'btn-primary': true,
        'disabled': false,
      };
    }

  }

  onSubmit(passengerForm: NgForm) {
    this.tempPassenger.checkIn = true;
    this.store.dispatch(new passengerAction.EditPassengerAction(this.tempPassenger.id, this.tempPassenger));
    this.passengers$.subscribe((state: PassengerState) => (this.passengers = state.passengers));
    // jQuery("#myModal").hide();
    // jQuery(".modal-backdrop.fade.show").hide();
  }

  exitform() {
    this.showForm = false;
  }

}
