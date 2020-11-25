import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';


class BookingIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.addLinks = this.addLinks.bind(this);
    this.handleCancel = this.handleCancel.bind(this)
    this.openEdit = this.openEdit.bind(this);
    this.openCreate = this.openCreate.bind(this);
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

  handleCancel(bookingId) {
    this.props.deleteBooking(bookingId)
  }

  render() {
    const { booking, listing, upcoming } = this.props;
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
          {upcoming ? <div className="cancel-booking" onClick={() => this.handleCancel(booking.id)}>Cancel booking</div> :
            this.addLinks()}
        </div>
      </li>
    )
  }
}

export default BookingIndexItem;

