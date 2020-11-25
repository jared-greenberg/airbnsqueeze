export const fetchReview = reviewId => {
  return $.ajax({
    method: 'GET',
    url: `/api/reviews/${reviewId}`
  })
}

export const updateReview = review => {
  return $.ajax({
    method: 'PATCH',
    url: `api/bookings/${bookingId}/reviews/${review.id}`,
    data: {
      review
    }
  })
}

export const createReview = (bookingId, review) => {
  return $.ajax({
    method: 'POST',
    url: `api/bookings/${bookingId}/reviews`,
    data: {
      review
    }
  })
}

export const deleteReview = reviewId => {
  return $.ajax({
    method: 'DELETE',
    url: `api/reviews/${reviewId}`
  })
}