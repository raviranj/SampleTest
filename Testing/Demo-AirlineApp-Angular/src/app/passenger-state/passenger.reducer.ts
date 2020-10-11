import * as PaasengerActions from './passenger.action'

import * as types from '../model/passenger.action.type';
import { PassengerState } from './passenger.state';

export const initialState: PassengerState = {
  passengers: [],
};

export function PassengerReducer(
  state = initialState,
  action: PaasengerActions.Actions
): PassengerState {
  switch (action.type) {
    case types.LOAD_PASSENGERS_SUCCESS: {
      return { ...state, passengers: [...(action.payload || [])] };
    }
    case types.EDIT_PASSENGER_SEAT_SUCCESS: {
      return {
        ...state, passengers: state.passengers.map((id) => {
          if (id.id === action.payload.id) {
            return action.payload;
          } else {
            return id;
          }
        })
      };
    }
    case types.ADD_PASSENGER_SUCCESS: {
      return {
        ...state, passengers: state.passengers.map((id) => {
          if (id.id === action.payload.id) {
            return action.payload;
            
          } else {
            return id;
          }
        })
      };
    }
    case types.DELETE_PASSENGER_SUCCESS: {
      return {
        ...state, passengers: state.passengers.map((id) => {
          if (id.id === action.payload.id) {
            return id;
          } else {
            return action.payload;
          }
        })
      }
    }
    default:
      return state;
  }
}
