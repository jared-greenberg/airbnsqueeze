import * as ReviewsApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const createReview = (bookingId, review) => dispatch=> {
  return ReviewsApiUtil.createReview(bookingId, review).then(
    review => dispatch(receiveReview(review))
  )
}

export const updateReview = review => dispatch =>{
  return ReviewsApiUtil.updateReview(review).then(
    review => dispatch(receiveReview(review))
  )
}

export const fetchReview = review => dispatch => {
  return ReviewsApiUtil.fetchReview(review).then(
    review => dispatch(receiveReview(review))
  )
}

export const deleteReview = reviewId => dispatch => {
  return ReviewsApiUtil.deleteReview(reviewId).then(
    (review) => dispatch(removeReview(review.id))
  )
}





