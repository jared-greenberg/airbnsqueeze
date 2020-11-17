import { MODAL_ON, MODAL_OFF } from '../actions/modal_actions';

export default (state = null, action) => {
  switch(action.type){
    case MODAL_ON:
      return action.modal;
    case MODAL_OFF:
      return null;
    default:
      return state;
  }
}