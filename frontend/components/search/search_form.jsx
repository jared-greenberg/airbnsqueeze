import React from 'react';

class SearchForm extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.query;
    
  }


  render () {
    <form onSubmit={this.handleSubmit}>
      <div class="location-field">
        <label htmlFor="location">Location</label>
        <input type="text" value={this.state.location}
        placeholder="Where are you going?"/>
      </div>
      <div class="calendars">

      </div>
      <div class="guests">
        <button id="search-button">
          Start your search
        <div id="search-badge"><i className="fas fa-search"></i></div>
        </button>
      </div>
    </form>
  }
}

export default SearchForm;