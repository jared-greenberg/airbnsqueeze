import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions';
import ReviewForm from './review_form';
import {closeModal} from '../../actions/modal_actions';
import {withRouter} from 'react-router-dom';


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
}}

const mapDispatchtoProps = dispatch => ({
  createReview: (bookingId, review) => dispatch(createReview(bookingId, review)),
  closeModal: () => dispatch(closeModal())
})

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(ReviewForm))

