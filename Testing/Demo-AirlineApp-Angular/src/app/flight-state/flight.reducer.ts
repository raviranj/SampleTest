import { FlightState } from './flight.state';
import * as types from '../model/flight.action.type';
import * as flightAction from './flight.action';
import { EDIT_PASSENGER_SEAT_SUCCESS } from '../model/passenger.action.type';


export const initialState: FlightState = {
    flights: [],
};

export function FlightReducer(
    state = initialState,
    action: flightAction.Actions
): FlightState {
    switch (action.type) {
        case types.LOAD_FLIGHT_SUCCESS: {
            return { ...state, flights: action.payload };
        }
        case types.EDIT_FLIGHT_ANCILLARY_SUCCESS: {
            return {
                ...state, flights: state.flights.map((fid) => {
                    if (fid.id === action.payload.id) {
                        return action.payload;
                    }
                })
            };
        }
        default:
            return state;
    }
}