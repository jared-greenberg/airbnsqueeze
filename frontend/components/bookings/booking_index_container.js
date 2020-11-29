import {connect} from 'react-redux';
import { userUpcomingBookings, userPastBookings, listingsFromBookings } from '../../util/selectors';
import BookingIndex from './booking_index';
import { fetchBookings, deleteBooking } from '../../actions/booking_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const bookings = Object.values(state.entities.bookings)
  // order by date
  if (bookings.length > 0) {bookings.sort((a,b) => new Date(a.startDate) - new Date(b.startDate))}
  
  const upcomingBookings = userUpcomingBookings(bookings, userId);
  const pastBookings = userPastBookings(bookings, userId).reverse();
  const listings = listingsFromBookings(state, bookings);
  
  return {
    currentUser: state.session.id,
    userId,
    bookings,
    upcomingBookings,
    pastBookings,
    listings
  }
}

const mapDispatchToProps = dispatch => ({
  fetchBookings: userId => dispatch(fetchBookings(userId)),
  deleteBooking: bookingID => dispatch(deleteBooking(bookingID)),
  openModal: modalType => dispatch(openModal(modalType))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookingIndex)

