import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';


class BookingIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.addLinks.bind(this);
  }

  addLinks(){
    if (this.props.review) {
      return <Link className="edit-review" to="/">Edit Review</Link>
    }
    else {
      return <Link className="add-review" to="/">Add review</Link>
    }
  }

  formatDate(date){
    return moment(date).format('ll')
  }

  render() {
    const {booking, listing, upcoming} = this.props;
    console.log(this.props);
    if (!booking || !listing) { return null }
    return (

      <li className="booking-item">
        <div className="booking-image">Image goes here</div>
        <section className="booking-item-text">
          <div className="date-and-city">
            <p className="booking-dates">{this.formatDate(booking.startDate)} - {this.formatDate(booking.endDate)}</p>
            <h2>{listing.city}</h2>
          </div>
        </section>
        <div className="booking-links">
          <Link className="booking-listing-link" to={`/listings/${listing.id}`}>{listing.title}</Link>
        {upcoming ? null : this.addLinks()}
        </div>
    </li>
    )
  }
}

export default BookingIndexItem;

