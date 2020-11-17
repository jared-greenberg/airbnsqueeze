import { MODAL_ON, MODAL_OFF } from '../actions/modal_actions';

export default (state = null, action) => {
  Object.freeze(state);
  switch(action.type){
    case MODAL_ON:
      return action.modalType;
    case MODAL_OFF:
      return null;
    default:
      return state;
  }
}