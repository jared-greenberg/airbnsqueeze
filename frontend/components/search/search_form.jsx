import React from 'react';
import { DateRangePicker, DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

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
    <form onSubmit={this.handleSubmit}>
      <div className="location-field">
        <label htmlFor="location">Location</label>
        <input type="text" value={this.state.location}
        placeholder="Where are you going?"
        onChange = {this.updateField("location")}/>
      </div>
      <div className="calendars">
        <DateRangePickerComponent id="daterangepicker"placeholder="Add dates" />
      </div>
      <div className="guests">
        <button id="search-button">
          Search
        <div id="search-badge"><i className="fas fa-search"></i></div>
        </button>
      </div>
    </form>
    )
  }
}

export default SearchForm;