import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from "../actions/session_actions";

const _defaultState = {id: null}

export default (state = _defaultState, action) => {
  debugger
  Object.freeze(state)
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      debugger
      return {id: action.user.id};
    case REMOVE_CURRENT_USER:
      return _defaultState;
    default:
      return state;
  }
}




