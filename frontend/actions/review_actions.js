import * as ReviewsApiUtil from '../util/reviews_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_LISTING';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

export const removeReview = reviewId => ({
  type: REMOVE_REVIEW,
  reviewId
})

export const fetchReview = review => dispatch => {
  return ReviewsApiUtil.fetchReview(review).then(
    review => dispatch(receiveReview(review))
  )
}





