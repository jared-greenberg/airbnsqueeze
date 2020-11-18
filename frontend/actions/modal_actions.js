import { clearSessionErrors } from './session_actions'
export const MODAL_ON = 'MODAL_ON';
export const MODAL_OFF = 'MODAL_OFF';

export const open = (modalType) => {
 return {
    type: MODAL_ON,
    modalType
 }
}

export const close = () => ({
  type: MODAL_OFF
})

export const closeModal = () => dispatch => {
  dispatch(close());
  dispatch(clearSessionErrors());
}

export const openModal = (modalType) => dispatch => {
  dispatch(clearSessionErrors())
  dispatch(open(modalType));
}