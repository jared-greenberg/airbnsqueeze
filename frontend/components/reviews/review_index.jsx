import moment from "moment";
import React from 'react';

const formatDate = date => {
  const dateString = moment(date).format('LL');
  const arr = dateString.split(" ");
  return arr[0] + " " + arr[2]
}

export default ({reviews, avgRating}) => {
  
  const reviewItems = reviews.map(review => {
    return (
      <li key={review.id} className="review-item">
        <div className="review-heading">
          <i className="fas fa-user-circle fa-3x"></i>
          <div className="reviewer-info">
            <h3>{review.authorName}</h3>
            <h4>{formatDate(review.updatedAt)}</h4>
          </div>
          <p className="user-message"></p>
        </div>
        <p>{review.body}</p>
      </li>
    )
  })

  return (
    <section className="listing-reviews">
      { reviews.length > 0 ? <h2 className="reviews-section-header"> <i className="fas fa-star fa-lg"></i> {`${avgRating} (${reviews.length} reviews)`}</h2> : 
        <h3>There are no reviews yet for this tiny.</h3> }
      <ul className="review-list">
        {reviewItems}
      </ul>
    </section>
  )
}