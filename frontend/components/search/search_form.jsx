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
    this.changePlaceholder = this.changePlaceholder.bind(this);
    this.guestRef = React.createRef();
  }

  
  componentDidUpdate(prevProps){
    if (prevProps.query !== this.props.query){
      this.setState(this.props.query);
    }
  }

  updateField(field){
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  changePlaceholder(e) {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.placeholder === "Where are you going?"){
      e.currentTarget.placeholder = '"Ithaca, NY" "Boulder, CO", "Santa Cruz, CA'
    } else{
      e.currentTarget.placeholder = "Where are you going?";
    }
  }


  changeGuests(val){
    if (this.state.numGuests === 6 && val === 1) {
      this.guestRef.current.classList.add("red")
      this.guestRef.current.textContent = "Too many for a tiny house!";
      setTimeout(() => {
        this.guestRef.current.textContent = 6;
        this.guestRef.current.classList.remove("red");
      }, 1000)
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
          placeholder="Where are you going?" onFocus={this.changePlaceholder}
          onBlur={this.changePlaceholder} onChange = {this.updateField("location")}/>
        </div>
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
              onFocusChange={focusedInput => this.setState({ focusedInput })} 
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
              <h3 ref={this.guestRef}>{numGuests > 0 ? `${numGuests} ${guestString}` : "Add guests"}</h3>
          </div>
        <button className="search-bar-button" disabled={guestDropOn}><i className="fas fa-search"></i></button>
      </form>

      { !guestDropOn ? null : (
        <GuestDrop changeGuests={this.changeGuests} numGuests={this.state.numGuests}/>
      )}
        
    </div>
    )
  }
}

export default SearchForm;