import {RECEIVE_BOOKINGS, REMOVE_BOOKING} from '../actions/booking_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type){
    case RECEIVE_BOOKINGS:
      return action.payload.bookings;
    case REMOVE_BOOKING:
      let newState = {...state};
      // here is where I encounter the problem
      delete newState[action.bookingId];
      return newState;
    default:
      return state; 
  }
}