import { RECEIVE_LISTING, RECEIVE_LISTINGS } from '../actions/listing_actions';

export default (state = {}, action) =>  {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTING:
      return {...state, ...action.payload.amenities}
    case RECEIVE_LISTINGS:
      return {...state, ...action.payload.amenities}
    default:
      return state;
  }
}