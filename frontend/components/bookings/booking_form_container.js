import { connect } from 'react-redux';
import BookingForm from './booking_form';
import { openModal } from '../../actions/modal_actions';


const mapStatetoProps = (state, ) => ({
  booking: {
    startDate: null,
    endDate: null,
    numGuests: 1,
    totalCost: 0,
  },
  currentUser: state.session.id,
})

const mapDispatchtoProps = dispatch => ({
  openModal: (modalType) => {dispatch(openModal(modalType))}
})

export default connect(mapStatetoProps, mapDispatchtoProps)(BookingForm);

