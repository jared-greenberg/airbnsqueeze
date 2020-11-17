import React from 'react';
import LogInContainer from '../sessions/log_in_container';
import SignUpContainer from '../sessions/sign_up_container';

export default ({modalType, closeModal}) => {
  if (!modalType) { return null };

  return (
    <div id="modal-background" onClick={closeModal}>
      <div id="modal-contents" onClick={(e) => e.stopPropagation()}>
        {modalType === "login" ? <LogInContainer /> : <SignUpContainer />}
        <a id="modal-x" href="#" onClick={closeModal}>{'\u00D7'}</a>
      </div>
    </div>
  )
}