import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';


class BookingIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.addLinks = this.addLinks.bind(this);
    this.openEdit = this.openEdit.bind(this);
    this.openCreate = this.openCreate.bind(this);
    this.tryToCancel = this.tryToCancel.bind(this);
  }

  addLinks() {
    if (this.props.reviewId) {
      return <div className="edit-review" onClick={this.openEdit}>Edit Review</div>
    }
    else {
      return <div className="add-review" onClick={this.openCreate}>Add review</div>
    }
  }

  openEdit(){
    window.bookingId = this.props.booking.id;
    window.reviewId = this.props.reviewId;
    this.props.openModal("editReview");
  }

  openCreate(){
    window.bookingId = this.props.booking.id;
    this.props.openModal("createReview");
  }


  formatDate(date) {
    return moment(date).format('ll')
  }

  tryToCancel(){
    window.bookingId = this.props.booking.id;
    this.props.openModal("cancelBooking");
  }

  

  render() {
    const { booking, listing, upcoming } = this.props;
    if (!booking || !listing) { return null }
    return (

      <li className="booking-item">
        <img className="booking-image" src={listing.photoUrls[0]}/>
        <section className="booking-item-text">
          <div className="date-and-city">
            <p className="booking-dates">{this.formatDate(booking.startDate)} - {this.formatDate(booking.endDate)}</p>
            <h2>{listing.city}</h2>
          </div>
        </section>
        <div className="booking-links">
          <Link className="booking-listing-link" to={`/listings/${listing.id}`}>
            <div className="left-link">
              <img className="thumbnail-image" src={listing.photoUrls[0]} />
              {listing.title}
            </div>
            <i className="fas fa-chevron-right"></i>
          </Link>
          {upcoming ? <div className="cancel-booking" onClick={this.tryToCancel}>Cancel booking</div> :
            this.addLinks()}
        </div>
      </li>
    )
  }
}

export default BookingIndexItem;

