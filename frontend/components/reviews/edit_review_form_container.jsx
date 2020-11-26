import { connect } from 'react-redux';
import { updateReview, fetchReview, deleteReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';

class EditReviewForm extends React.Component {
  componentDidMount(){
    this.props.fetchReview(window.reviewId);
  }

  render(){

    const {review, type, action, booking, history, updateReview, closeModal, deleteReview} = this.props;
    if (!review) return null;
    return <ReviewForm action={action} 
                      type = {type} 
                      review={review}
                      booking={booking}
                      updateReview={updateReview}
                      closeModal={closeModal}
                      deleteReview={deleteReview}
                      history={history}
                      />
  }
}

const mapStatetoProps = (state) => {
  const review = state.entities.reviews[window.reviewId];
  const booking = state.entities.bookings[window.bookingId]

  return {
    review,
    type: "Update",
    booking
    // errors: state.errors.reviews
  }
}

const mapDispatchtoProps = dispatch => ({
  updateReview: review => dispatch(updateReview(review)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(EditReviewForm))


