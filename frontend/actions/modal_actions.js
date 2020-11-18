export const MODAL_ON = 'MODAL_ON';
export const MODAL_OFF = 'MODAL_OFF';

export const openModal = (modalType) => {
 return {
    type: MODAL_ON,
    modalType
 }
}

export const closeModal = () => ({
  type: MODAL_OFF
})