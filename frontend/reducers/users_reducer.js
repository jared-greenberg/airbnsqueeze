import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {RECEIVE_LISTING} from '../actions/listing_actions'; 

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {...state, [action.user.id]: action.user}
    case RECEIVE_LISTING:
      return {...state, [action.payload.user.id]: action.payload.user}
    default:
      return state;
  }
}