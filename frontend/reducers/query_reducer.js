import {START_QUERY, CLEAR_QUERY} from '../actions/query_actions';
export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_QUERY:
      return action.query
    case CLEAR_QUERY:
      return {};
    default:
      return state;
  }
}