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
        <input type="text"/>
      </div>
    </form>
  }
}

export default SearchForm;