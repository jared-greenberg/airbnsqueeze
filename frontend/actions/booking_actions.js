import * as BookingsApiUtils from '../util/bookings_api_util';

export const RECEIVE_BOOKINGS = 'RECEIVE_BOOKINGS';
export const REMOVE_BOOKING = 'REMOVE_BOOKING'

export const receiveBookings = payload => ({
  type: RECEIVE_BOOKINGS,
  payload
})

export const removeBooking = bookingId => ({
  type: REMOVE_BOOKING,
  bookingId
})


export const fetchBookings = userId => dispatch =>{
  return BookingsApiUtils.fetchBookings(userId).then(
    payload => dispatch(receiveBookings(payload))
  )
}

export const deleteBookings = bookingId => dispatch => {
  return BookingsApiUtils.deleteBooking(bookingId).then(
    () => dispatch(removeBooking(bookingId))
  )
}


