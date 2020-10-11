// import { Action } from '@ngrx/store';
// import { Passenger } from '../helper/passenger-detailss.service';

// export const UPDATE_CHECK_IN = 'UPDATE_CHECK_IN';


// export class PassengerAction implements Action {
//     readonly type= UPDATE_CHECK_IN;
//     payload: Passenger;
// }


import { Action } from '@ngrx/store';
import * as types from '../model/passenger.action.type';
import { Passenger } from '../commons/passenger-detailss.service';

export class LoadPassengerAction implements Action {
    readonly type = types.LOAD_PASSENGERS;
    constructor(public payload: string) { }

}

export class LoadPassengerSuccessAction implements Action {
    readonly type = types.LOAD_PASSENGERS_SUCCESS;
    constructor(public payload: Passenger[]) { }
}

export class EditPassengerAction implements Action {
    readonly type = types.EDIT_PASSENGER_SEAT;
    constructor(public flightId: string, public payload: Passenger) { }
}

export class EditPassengerSuccessAction implements Action {
    readonly type = types.EDIT_PASSENGER_SEAT_SUCCESS;
    constructor(public payload: Passenger) { }
}

export class AddPassengerAction implements Action{
    readonly type=types.ADD_PASSENGER;
    constructor(public payload:Passenger){}
}

export class AddPassengerSuccessAction implements Action{
    readonly type=types.ADD_PASSENGER_SUCCESS;
    constructor(public payload:Passenger){}
}

export class DeletePassengerAction implements Action{
    readonly type=types.DELETE_PASSENGER;
    constructor(public payload:string){}
}

export class DeletePassengerSuccessAcction implements Action{
    readonly type=types.DELETE_PASSENGER_SUCCESS;
    constructor(public payload:Passenger){}
}

export type Actions = LoadPassengerAction | LoadPassengerSuccessAction | EditPassengerAction | EditPassengerSuccessAction |AddPassengerAction | AddPassengerSuccessAction |DeletePassengerAction | DeletePassengerSuccessAcction;