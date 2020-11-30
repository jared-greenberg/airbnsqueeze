import React from 'react';
import LogInContainer from '../sessions/log_in_container';
import SignUpContainer from '../sessions/sign_up_container';
import EditReviewFormContainer from '../reviews/edit_review_form_container';
import CreateReviewFormContainer from '../reviews/create_review_form_container';
import CancelBooking from '../bookings/cancel_booking';

class Modal extends React.Component {

  constructor (props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.modalComponent = this.modalComponent.bind(this);
    this.componentType = this.componentType.bind(this);
  }


  handleClick() {
    if (this.props.modalType !== "cancelBooking"){
      this.props.closeModal();
    }
    return
  }

  modalComponent(){
    const {modalType} = this.props;
    switch (modalType) {
      case ("login"):
        return <LogInContainer />
      case ("signup"):
        return <SignUpContainer />
      case ("editReview"):
        return <EditReviewFormContainer />
      case ("createReview"):
        return <CreateReviewFormContainer />
      case ("cancelBooking"):
        return <CancelBooking closeModal={this.props.closeModal} />
      default:
        return null;
    }
  }

  componentType(){
    if (["login", "signup"].includes(this.props.modalType)){
      return ""
    }
    else if (this.props.modalType === "cancelBooking"){
      return "cancelling-"
    }
    else {
      return "review-"
    }
  }

  render(){

    const {modalType, closeModal} = this.props;
    
    if (!modalType) return null;
    
    return (
      <div id={`${this.componentType()}modal-background`} onClick={this.handleClick}>
        <div id={`${this.componentType()}modal-contents`}
          onClick={(e) => e.stopPropagation()}>
          {this.modalComponent()}
          <a id="modal-x" onClick={closeModal}>{'\u00D7'}</a>
        </div>
      </div>
    )
  }
}

export default Modal;