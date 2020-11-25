import { connect } from 'react-redux';
import { updateReview, fetchReview } from '../../actions/review_actions';
import ReviewForm from './review_form';
import React from 'react';

class EditReviewForm extends React.Component {
  componentDidMount(){
    this.props.fetchReview(window.reviewId);
  }

  render(){

    const {review, buttonText, action} = this.props;

    return <ReviewForm action={action} buttonText = {buttonText} review={review}/>
  }
}

const mapStatetoProps = (state) => {

  const review = state.entities.reviews[window.reviewId] || {};
  const booking = state.entities.booking[window.bookingId]

  return {
    review,
    buttonText: "Update",
    booking
    // errors: state.errors.reviews
  }
}

const mapDispatchtoProps = dispatch => ({
  action: review => dispatch(updateReview(review)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(EditReviewForm)


