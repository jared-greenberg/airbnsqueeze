import React from 'react';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './search_calendar_custom.css'
import GuestDrop from '../bookings/guest_drop';


class SearchForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {...this.props.query,
       guestDropOn: false,
      
      }
    this.updateField = this.updateField.bind(this);
    this.changeGuests = this.changeGuests.bind(this);
    this.toggleDrop = this.toggleDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateField(field){
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  changeGuests(val){
    if (this.state.numGuests === 4 && val === 1) {
      alert("These homes are too tiny. You might want to try the real Airbnb!")
      return
    }
    this.setState({numGuests: this.state.numGuests + val})
  }

  handleSubmit(e){
    e.preventDefault();
    const query = this.state;
    delete query["guestDropOn"];
    query["startDate"] = null;
    query["endDate"] = null;
    this.props.startQuery(query);
    this.props.fetchListings(query);
    if (this.props.location.pathname !== "/listings"){
      this.props.history.push('/listings')
    }
  }

  toggleDrop(e){
    e.preventDefault();
    e.stopPropagation();
    if (this.state.guestDropOn && !e.target.classList.contains("drop")){
      this.setState({guestDropOn: false}, () => {
        document.removeEventListener("click", this.toggleDrop)
      })
    }
    else {
      this.setState({guestDropOn: true}, () => {
        document.addEventListener("click", this.toggleDrop)
      })
    }
  }



  render () {

    const {numGuests, guestDropOn} = this.state;
    const guestString = numGuests === 1 ? "guest" : "guests"
   
    return (
    <div className="search-form-wrapper">
      <form id="search-form" onSubmit={this.handleSubmit}>
        <div className="location-field">
          <label htmlFor="location">Location</label>
          <input type="text" value={this.state.location}
          placeholder="Where are you going?"
          onChange = {this.updateField("location")}/>
        </div>
        <div className="calendars"> 
            <label id="checkin-label">Check in</label>
            <label id="checkout-label">Check out</label>
            <DateRangePicker
              startDate={this.state.startDate} // momentPropTypes.momentObj or null,
              startDateId="search_start" // PropTypes.string.isRequired,
              endDate={this.state.endDate} // momentPropTypes.momentObj or null,
              endDateId="search_end" // PropTypes.string.isRequired,
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
              focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
              onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
              startDatePlaceholderText="Add dates"
              endDatePlaceholderText="Add dates"
              displayFormat="MMM D"
              noBorder={false}
              hideKeyboardShortcutsPanel={true}
              withPortal
              block
              readOnly
              daySize={50}
            />
        </div>
        
          <div className={`${guestDropOn ? "guest-menu-open" : ""} guests`} 
              onClick={this.toggleDrop}>
              <label id="guests-label">Guests</label>
              <h3>{numGuests > 0 ? `${numGuests} ${guestString}` : "Add guests"}</h3>
          </div>
        <button id="search-bar-button"><i className="fas fa-search"></i></button>
      </form>

      { !guestDropOn ? null : (
        <GuestDrop changeGuests={this.changeGuests} numGuests={this.state.numGuests}/>
      )}
        
    </div>
    )
  }
}

export default SearchForm;