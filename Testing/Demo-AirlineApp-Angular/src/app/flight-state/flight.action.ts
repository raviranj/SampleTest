import { Action } from '@ngrx/store';
import * as types from '../model/flight.action.type';
import { Flight } from '../commons/passenger-detailss.service';


export class LoadFlightAction implements Action {
    readonly type = types.LOAD_FLIGHT;
}

export class LoadFlightSuccessAction implements Action {
    readonly type = types.LOAD_FLIGHT_SUCCESS;
    constructor(public payload: Flight[]) { }
}

export class EditFlightAction implements Action {
    readonly type = types.EDIT_FLIGHT_ANCILLARY;
    constructor(public flightId: string, public payload: Flight) { }
}

export class EditFlightSuccessAction implements Action {
    readonly type = types.EDIT_FLIGHT_ANCILLARY_SUCCESS;
    constructor(public payload: Flight) { }
}

export type Actions = LoadFlightAction | LoadFlightSuccessAction | EditFlightAction | EditFlightSuccessAction;