import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as flightAction from './flight.action';
import { FlightService } from '../commons/flight.service';
import * as type from '../model/flight.action.type';
import { mergeMap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root',
})
export class FlightEffects {
    constructor(private flightService: FlightService, private actions: Actions) { }
    @Effect() getFLights: Observable<Action> = this.actions.pipe(
        ofType<flightAction.LoadFlightAction>(type.LOAD_FLIGHT),
        mergeMap(() => this.flightService.getAllFlights().pipe(map((airlines) => new flightAction.LoadFlightSuccessAction(airlines)))));

    @Effect() setFlightSeat: Observable<Action> = this.actions.pipe(
        ofType<flightAction.EditFlightAction>(type.EDIT_FLIGHT_ANCILLARY), mergeMap((action) => this.flightService.updateAncillary(action.flightId, action.payload).pipe(map((flight) => new flightAction.EditFlightSuccessAction(flight))))
    );
}