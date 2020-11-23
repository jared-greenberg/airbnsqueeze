export const createBooking = (listingId, booking) => {
  return $.ajax({
    method: 'POST',
    url: `api/listings/${listingId}/bookings`,
    data: {
      booking
    }
  })
}

export const deleteBooking = bookingId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/bookings/${bookingId}`
  })
}

export const fetchBookings = userId => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/${userId}/bookings'
  })
}