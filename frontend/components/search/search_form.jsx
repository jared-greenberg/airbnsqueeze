import React from 'react';
import { DateRangePicker } from 'react-dates';

class SearchForm extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.query;    
    this.updateField = this.updateField.bind(this);
  }

  updateField(field){
    return (e) => {
      this.setState({[field]: e.currentTarget.value})
    }
  }



  render () {
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
              <h3>Add guests</h3>
          </div>
      </form>
      <div id="search-bar-button"><i className="fas fa-search"></i></div>
    </div>
    )
  }
}

export default SearchForm;