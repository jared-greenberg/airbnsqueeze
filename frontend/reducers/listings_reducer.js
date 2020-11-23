import {RECEIVE_LISTING, RECEIVE_LISTINGS} from '../actions/listing_actions';
import {RECEIVE_BOOKINGS} from '../actions/booking_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTING:
      return {...state, ...action.payload.listing };
    case RECEIVE_LISTINGS:
      return action.payload.listings;
    case RECEIVE_BOOKINGS:
      return action.payload.listings;
    default:
      return state;
  }
}