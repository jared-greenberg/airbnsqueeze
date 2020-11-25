import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';


class BookingIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.reviewLinks = this.reviewLinks.bind(this);
    this.toggleCancel = this.toggleCancel.bind(this)
    this.state = { cancelling: false }
  }


  reviewLinks(){
    const {openModal} = this.props;
    if (this.props.review) {
      return <div className="edit-review" onClick={() => openModal("createReview")} >Edit Review</div>
    }
    else {
      return <div className="add-review" onClick={() => openModal("editReview")} >Add review</div>
    }
  }

  formatDate(date){
    return moment(date).format('ll')
  }

  cancelLinks(){
    const {deleteBooking, booking} = this.props;
    if (this.state.cancelling){
      return (
        <div id="cancel-prompt"> 
          <h3>Are you sure?</h3>
          <div className="cancel-confirmation">
            <button id="no-cancel" onClick={this.toggleCancel}>No</button>
            <button id="yes-cancel" onClick={() => deleteBooking(booking.id)}>Yes</button>
          </div>
        </div>
      )
    }
    else {
      return <div className="cancel-booking" onClick={this.toggleCancel}>Cancel booking</div>
    }
  }

  toggleCancel(){
    this.setState({cancelling: !this.state.cancelling})
  }

  render() {
    const {booking, listing, upcoming} = this.props;
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
          {!upcoming ? this.reviewLinks() : this.cancelLinks()}
        </div>
    </li>
    )
  }
}

export default BookingIndexItem;

