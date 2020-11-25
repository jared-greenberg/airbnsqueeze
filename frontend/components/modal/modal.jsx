import React from 'react';
import LogInContainer from '../sessions/log_in_container';
import SignUpContainer from '../sessions/sign_up_container';
import EditReviewFormContainer from '../reviews/edit_review_form_container';
import CreateReviewFormContainer from '../reviews/create_review_form_container';

class Modal extends React.Component {

  constructor (props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.modalComponent = this.modalComponent.bind(this);
    this.reviewClass = this.reviewClass.bind(this);
  }


  handleClick() {
    if (this.props.modalType === "login" || this.props.modalType === "signup"){
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
      default:
        return null;
    }
  }

  reviewClass(){
    if (["login", "signup"].includes(this.props.modalType)){
      return ""
    }
    else {
      return "review-"
    }
  }

  render(){

    const {modalType, closeModal} = this.props;
    
    if (!modalType) return null;
    
    return (
      <div id="modal-background" onClick={this.handleClick}>
        <div id={`${this.reviewClass()}modal-contents`}
          onClick={(e) => e.stopPropagation()}>
          {this.modalComponent()}
          <a id="modal-x" onClick={closeModal}>{'\u00D7'}</a>
        </div>
      </div>
    )
  }
}

export default Modal;