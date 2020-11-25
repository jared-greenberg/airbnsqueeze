import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions';
import ReviewForm from './review_form';


const mapStatetoProps = (state) => {

  const booking = state.entities.bookings[window.bookingId];
  
  return {
    review: {
      body: "",
      rating: 0,
      user_id: state.session.id,
      booking_id: window.bookingId
    },
    booking,
    buttonText: "Create"
    // errors: state.errors.reviews
}}

const mapDispatchtoProps = dispatch => ({
  action: review => dispatch(createReview(review))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(ReviewForm)

