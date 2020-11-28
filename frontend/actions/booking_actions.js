import * as BookingsApiUtils from '../util/bookings_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING';
export const CLEAR_BOOKING_ERRORS = 'CLEAR_BOOKING_ERRORS';
export const RECEIVE_BOOKING_ERRORS = 'RECEIVE_BOOKING_ERRORS';

export const receiveBookings = payload => ({
  type: RECEIVE_BOOKINGS,
  payload
})

export const removeBooking = bookingId => {
  return {
  type: REMOVE_BOOKING,
  bookingId
  }
}

export const clearBookingErrors = () => ({
  type: CLEAR_BOOKING_ERRORS
})

export const receiveBookingErrors = errors => ({
  type: RECEIVE_BOOKING_ERRORS,
  errors
})

export const createBooking = (listingId, booking) => dispatch => {
  return BookingsApiUtils.createBooking(listingId, booking).then(
    () => dispatch(clearBookingErrors()), 
    errors => dispatch(receiveBookingErrors(errors.responseJSON))
  )
}


export const fetchBookings = userId => dispatch =>{
  return BookingsApiUtils.fetchBookings(userId).then(
    payload => dispatch(receiveBookings(payload))
  )
}

export const deleteBooking = bookingId => dispatch => {
  return BookingsApiUtils.deleteBooking(bookingId).then(
    () => {
      dispatch(removeBooking(bookingId))
    }
  )
}


