import { connect } from 'react-redux';
import { updateReview, fetchReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStatetoProps = (state, ownProps) => {

  const review = state.entities.reviews[ownProps.reviewId]

  return {
    review,
    buttonText: "Update"
    // errors: state.errors.reviews
  }
}

const mapDispatchtoProps = dispatch => ({
  action: review => dispatch(updateReview(review)),
  fetchReview: reviewId => dispatch(fetchReview(reviewId))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(ReviewForm)


