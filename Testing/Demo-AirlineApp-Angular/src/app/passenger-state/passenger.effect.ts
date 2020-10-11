import { Injectable } from "@angular/core";

import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as pasengerActions from './passenger.action';
import * as types from '../model/passenger.action.type';
import { FlightService } from '../commons/flight.service';
import { PassengerDetailssService } from '../commons/passenger-detailss.service';
@Injectable({
    providedIn: 'root',
})
export class PassengerEffects {
    constructor(private flightServices: FlightService, private actions: Actions,
        private passengerService: PassengerDetailssService) { }

    @Effect()
    getPassengerList: Observable<Action> = this.actions.pipe(
        ofType<pasengerActions.LoadPassengerAction>(types.LOAD_PASSENGERS),
        mergeMap((action) =>
            this.flightServices
                .getPassengerList(action.payload)
                .pipe(
                    map((passengerList) => new pasengerActions.LoadPassengerSuccessAction(passengerList))
                )
        )
    );

    @Effect()
    setPassengerSeat: Observable<Action> = this.actions.pipe(
        ofType<pasengerActions.EditPassengerAction>(types.EDIT_PASSENGER_SEAT), mergeMap((action) => this.flightServices.updatePassengerSeat(action.flightId, action.payload).pipe(map((passenger) => new pasengerActions.EditPassengerSuccessAction(passenger))))
    );
    @Effect()
    addPassengerData: Observable<Action> = this.actions.pipe(
        ofType<pasengerActions.AddPassengerAction>(types.ADD_PASSENGER), mergeMap((action) => this.flightServices.addPassenger(action.payload).pipe(map((passenger) => new pasengerActions.AddPassengerSuccessAction(passenger))))
    );

    @Effect()
    deletePassengerData: Observable<Action> = this.actions.pipe(
        ofType<pasengerActions.DeletePassengerAction>(types.DELETE_PASSENGER), mergeMap((action) => this.flightServices.deletePassenger(action.payload).pipe(map((passenger) => new pasengerActions.AddPassengerSuccessAction(passenger))))
    );

}