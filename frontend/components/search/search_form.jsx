import React from 'react';
import { DateRangePicker } from 'react-dates';

class SearchForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {...this.props.query}
    this.updateField = this.updateField.bind(this);
    this.changeGuests = this.changeGuests.bind(this);
  }

  updateField(field){
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
    }
  }

  changeGuests(val){
    if (this.state.guests === 3 && val === 1) {
      alert("These homes are too tiny. You might want to try the real Airbnb!")
      return
    }
    this.setState({guests: this.state.guests + val})
  }



  render () {

    const {guests} = this.props.query;

    return (
    <div class="search-form-wrapper">
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
              noBorder={true}
            />
        </div>
        
          <div className="guests">
              <label id="guests-label">Guests</label>
              <h3>{guests > 0 ? `${guests} guests` : "Add guests"}</h3>
          </div>
      </form>
      <div id="search-bar-button"><i className="fas fa-search"></i></div>
      <div className = "guest-drop">
        <h2>Guests</h2>
        <div className="changeNum">
          <button onClick={this.changeGuests(-1)}>-</button>
          <h3>{guests}</h3>
          <button onClick={this.changeGuests(1)}>+</button>
        </div>
      </div>
    </div>
    )
  }
}

export default SearchForm;