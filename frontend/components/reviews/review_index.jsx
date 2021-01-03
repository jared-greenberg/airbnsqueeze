import moment from "moment";
import React from 'react';
import {Link} from 'react-router-dom';

const formatDate = date => {
  const dateString = moment(date).format('LL');
  const arr = dateString.split(" ");
  return arr[0] + " " + arr[2]
}

export default ({reviews, avgRating, currentUser}) => {
  const reviewItems = reviews.map(review => {
    return (
      <li key={review.id} className="review-item">
        <div className="review-heading">
          <i className="fas fa-user-circle fa-3x"></i>
          <div className="reviewer-info">
            <h3>{review.authorName}</h3>
            <h4>{formatDate(review.updatedAt)}</h4>
          </div>
          {currentUser !== review.authorId ? null : (
            <p className="user-message">(You can make changes to your review on your <Link to={`/users/${currentUser}/bookings#past`}>Trips</Link> page)</p>
          )}
        </div>
        <p>{review.body}</p>
      </li>
    )
  })

  const reviewText = reviews.length === 1 ? "review" : "reviews"

  return (
    <section id="listing-reviews">
      { reviews.length > 0 ? <h2 className="reviews-section-header"> <i className="fas fa-star fa-lg"></i> {`${avgRating} (${reviews.length} ${reviewText})`}</h2> : 
        <h3>There are no reviews yet for this tiny.</h3> }
      <ul className="review-list">
        {reviewItems}
      </ul>
    </section>
  )
}