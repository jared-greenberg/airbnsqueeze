import { connect } from 'react-redux';
import BookingForm from './booking_form';


const mapStatetoProps = (state, ownProps) => ({
  booking: {
    startDate: null,
    endDate: null,
    numGuests: 1,
    totalCost: 0,
    renter_id: state.session.currentUser,
    listing_id: ownProps.match.params.listingId
  }
})

export default connect(mapStatetoProps, null)(BookingForm);

