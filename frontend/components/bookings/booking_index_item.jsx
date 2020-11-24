import React from 'react';
import {Link} from 'react-router-dom';


class BookingIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.addLinks.bind(this);
  }

  addLinks(){
    if (this.props.review) {
      return <Link to="/">Edit Review</Link>
    }
    else {
      return <Link to="/">Add review</Link>
    }
  }

  render() {
    const {booking, listing, upcoming} = this.props;
    console.log(this.props);
    if (!booking || !listing) { return null }
    return (
      <li className="booking-item">
        <div className="booking-image">Image goes here</div>
        <div className="date-and-city">
          <h3>{new Date(booking.startDate).toDateString()} - {new Date(booking.endDate).toDateString()}</h3>
          <h2>{listing.city}</h2>
          <h3>{listing.title}</h3>
        </div>
        {upcoming ? null : this.addLinks()}
      </li>
    )
  }
}

export default BookingIndexItem;

