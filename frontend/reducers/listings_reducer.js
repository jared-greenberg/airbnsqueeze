import {RECEIVE_LISTING, RECEIVE_LISTINGS} from '../actions/listing_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTING:
      return {...state, ...action.payload.listing }
    case RECEIVE_LISTINGS:
      return {...action.payload.listings, ...state}
    default:
      return state;
  }
}