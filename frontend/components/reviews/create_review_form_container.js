import {connect} from 'react-redux';
import {createReview} from '../../actions/review_actions';
import ReviewForm from './review_form';


const mapStatetoProps = (state, ownProps) => ({
  review: {
    body: "",
    rating: 0,
    user_id: state.entities.currentUser.id,
    booking_id: ownProps.match.params.bookingId
  },
  buttonText: "Create"
  // errors: state.errors.reviews
})

const mapDispatchtoProps = dispatch => ({
  action: review => dispatch(createReview(review))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(ReviewForm)

