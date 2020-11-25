import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions';
import ReviewForm from './review_form';
import {closeModal} from '../../actions/modal_actions';


const mapStatetoProps = (state) => {

  const booking = state.entities.bookings[window.bookingId];
  return {
    review: {
      body: "",
      rating: 0,
      author_id: state.session.id,
    },
    booking,
    type: "Create"
    // errors: state.errors.reviews
}}

const mapDispatchtoProps = dispatch => ({
  createReview: (bookingId, review) => dispatch(createReview(bookingId, review)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mapStatetoProps, mapDispatchtoProps)(ReviewForm)

