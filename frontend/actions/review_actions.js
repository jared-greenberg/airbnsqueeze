import * as ReviewsApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERROR';
export const CLEAR_REVIEW_ERRORS = 'CLEAR_REVIEW_ERROR';

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const receiveReviewError = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
})

export const createReview = (bookingId, review) => {
  return ReviewsApiUtil.createReview(bookingId, review).catch(
    err => dispatch(receiveReviewError(err.responseJSON))
  )
}

export const updateReview = review => dispatch =>{
  return ReviewsApiUtil.updateReview(review).catch(
    err => dispatch(receiveReviewError(err.responseJSON))
  )
}

export const fetchReview = review => dispatch => {
  return ReviewsApiUtil.fetchReview(review).then(
    review => dispatch(receiveReview(review))
  )
}

export const deleteReview = reviewId => dispatch => {
  return ReviewsApiUtil.deleteReview(reviewId).then(
    () => dispatch(removeReview(reviewId))
  )
}





