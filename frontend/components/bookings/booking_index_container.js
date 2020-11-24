import {connect} from 'react-redux';
import { userUpcomingBookings, userPastBookings, bookingsListingInfo } from '../../util/selectors';
import BookingIndex from './booking_index';
import { fetchBookings } from '../../actions/booking_actions';

const mapStateToProps = (state, ownProps) => {
  // reviews too
  const userId = ownProps.match.params.userId;
  const bookings = Object.values(state.entities.bookings);
  const upcomingBookings = userUpcomingBookings(bookings, userId);
  const pastBookings = userPastBookings(bookings, userId);
  const listings = bookingsListingInfo(state, bookings);
  
  return {
    userId,
    bookings,
    upcomingBookings,
    pastBookings,
    listings
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBookings: userId => dispatch(fetchBookings(userId)),
  deleteBooking: bookingID => dispatch(deleteBooking(bookingID))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex)

