import {START_QUERY, CLEAR_QUERY} from '../actions/query_actions';

const defaultQuery = {location: "", numGuests: 0, startDate: null, endDate: null, region: {}}

export default (state = defaultQuery, action) => {
  Object.freeze(state);
  switch(action.type) {
    case START_QUERY:
      return action.query
    case CLEAR_QUERY:
      return defaultQuery;
    default:
      return state;
  }
}