export const MODAL_ON = 'MODAL_ON';
export const MODAL_OFF = 'MODAL_OFF';

export const openModal = (componentName) => {
  type: MODAL_ON,
  componentName
}

export const closeModal = () => ({
  type: MODAL_OFF
})