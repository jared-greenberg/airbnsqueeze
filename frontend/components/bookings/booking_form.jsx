import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './booking_calendar_custom.css'
import GuestDrop from './guest_drop';


class BookingForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {...props.booking, guestDropOn: false, showTotal: false};
    this.changeGuests = this.changeGuests.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateCosts = this.updateCosts.bind(this);
    this.errors = this.errors.bind(this);
    this.dropArrow = this.dropArrow.bind(this);
  }


  changeGuests(val) {
    if (this.state.numGuests === 4 && val === 1) {
      alert("These homes are too tiny. You might want to try the real Airbnb!")
      return
    }
    this.setState({ numGuests: this.state.numGuests + val })
  }

  dropArrow() {
    if (this.state.guestDropOn){
      return <i className="fas fa-chevron-up"></i>
    }
    else {
      return <i className="fas fa-chevron-down"></i>
    }
  }

  errors(type) {
    const { errors } = this.props;
    if (!errors[type]) return null;
    return (
      <div className={`${type}-error`}>
        <i className="fas fa-exclamation-circle fa-sm"></i> <span>{errors[type]}</span>
      </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.currentUser) {
      this.props.openModal("login");
      return 
    }
    const listingId = this.props.match.params.listingId;
    const booking = {
      renter_id: this.props.currentUser,
      start_date: this.state.startDate === null ? null : this.state.startDate.format('YYYY-MM-DD'),
      end_date: this.state.endDate === null ? null : this.state.endDate.format('YYYY-MM-DD'),
      total_cost: this.state.totalCost,
      num_guests: this.state.numGuests
    }
    this.props.createBooking(listingId, booking).then( () => {
        this.props.history.push(`/users/${this.props.currentUser}/bookings`)
      }
    )
    
  }

  toggleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.guestDropOn && !e.target.classList.contains("drop")) {
      this.setState({ guestDropOn: false }, () => {
        document.removeEventListener("click", this.toggleDrop)
      })
    }
    else {
      this.setState({ guestDropOn: true }, () => {
        document.addEventListener("click", this.toggleDrop)
      })
    }
  }

  updateCosts(){
    if (this.state.focusedInput) {
      this.setState({showTotal: false})
    }
    else if (this.state.startDate === null || this.state.endDate === null){
      return
    }
    else {
      const nights = this.state.endDate.diff(this.state.startDate, 'days');
      const subtotal = (this.props.price * nights);
      const serviceFee = (this.props.price * nights * .12);
      const totalCost = subtotal + serviceFee;
      this.setState({
        nights,
        subtotal, 
        serviceFee,
        totalCost,
        showTotal: true
      })
    }
  }


  render(){

    const { numGuests, guestDropOn, nights } = this.state;
    const guestString = numGuests === 1 ? "guest" : "guests";
    const nightString = nights === 1 ? "night" : "nights";

    return (
      <div id="booking-form-wrapper">
        <form id="booking-form" onSubmit={this.handleSubmit}>
          <h3><strong>${this.props.price}</strong> / night</h3>
        
          <section className="booking-inputs">
            <div className="calendars">
              <label id="checkin-label">Check in</label>
              <label id="checkout-label">Check out</label>
              <DateRangePicker
                startDate={this.state.startDate} 
                startDateId="search_start" 
                endDate={this.state.endDate} 
                endDateId="search_end" 
                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
                focusedInput={this.state.focusedInput} 
                onFocusChange={focusedInput =>{this.setState({ focusedInput }, this.updateCosts)}} 
                startDatePlaceholderText="Add dates"
                endDatePlaceholderText="Add dates"
                noBorder={false}
                hideKeyboardShortcutsPanel={true}
                anchorDirection="right"
                block
                readOnly
                daySize={50}
              />
              {this.errors("start_date")}
              {this.errors("start_date") === null ? this.errors("end_date"): null}
              {this.errors("base")} 
            </div>
            <div className="guest-options" onClick={this.toggleDrop}>
              <label id="guests-label">Guests</label>
              <h3 className="num-guests">{`${numGuests} ${guestString}`}</h3>
              {this.dropArrow()}
            </div>
            </section>
            {!guestDropOn ? null : (
              <GuestDrop changeGuests={this.changeGuests} numGuests={numGuests} type="booking" capacity={this.props.capacity} />
            )}

          <input type="submit" value="Reserve"/>
          <p>You won't be charged yet</p>
          { !this.state.showTotal ? null : (
            <div id="cost-info">
                <div className= "price-bar-1">
                    <div className="nightly-price">
                    <p>{`$${this.props.price} \u00D7 ${nights} ${nightString}`} </p>
                    <p>${this.state.subtotal.toFixed(2)}</p>
                    </div>
                    <div className="service-fee">
                    <p>Service fee</p>
                    <p>${this.state.serviceFee.toFixed(2)}</p>
                    </div>
              </div>
                <div className="total">
                  <strong>Total</strong>
                  <strong>${this.state.totalCost.toFixed(2)}</strong>
                </div>
            </div>  
          )}
        </form>
      </div>
    )
  }
}

export default BookingForm;