import {RECEIVE_BOOKINGS, REMOVE_BOOKING} from '../actions/booking_actions';
import {REMOVE_REVIEW, RECEIVE_REVIEW} from '../actions/review_actions';

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
    case RECEIVE_REVIEW:
      let nextState = {...state};
      nextState[action.review.bookingId]["reviewId"] = action.review.id;
      return nextState;
    case REMOVE_REVIEW:
      let copyState = {...state};
      const index = Object.values(copyState).filter(b => b.reviewId === action.reviewId)[0]["id"];
      copyState[index]["reviewId"] = null;
      return copyState;
    default:
      return state; 
  }
}