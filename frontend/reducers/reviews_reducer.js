import {RECEIVE_LISTING} from '../actions/listing_actions';
import {RECEIVE_REVIEW, REMOVE_REVIEW} from '../actions/review_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LISTING:
      return action.payload.reviews || {}
    case RECEIVE_REVIEW:
      return {[action.review.id]: action.review}
    case REMOVE_REVIEW:
      let newState = {...state};
      delete newState[action.reviewId];
      return newState;
    default: 
      return state;
  }
}