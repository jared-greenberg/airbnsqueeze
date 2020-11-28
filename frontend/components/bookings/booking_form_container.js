import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { openModal } from '../../actions/modal_actions';
import { createBooking } from '../../actions/booking_actions';


const mapStatetoProps = (state) => ({
  booking: {
    startDate: null,
    endDate: null,
    numGuests: 1,
    totalCost: 0,
  },
  currentUser: state.session.id,
  errors: state.errors.booking
})

const mapDispatchtoProps = dispatch => ({
  openModal: (modalType) => {dispatch(openModal(modalType))},
  createBooking: (listingId, booking) => dispatch(createBooking(listingId, booking))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(BookingForm);

