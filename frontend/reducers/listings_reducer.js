import {RECEIVE_LISTING} from '../actions/listing_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTING:
      debugger
      return {...state, [action.listing.id]: action.listing}
    default:
      return state;
  }
}