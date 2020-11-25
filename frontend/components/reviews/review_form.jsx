import React from 'react';

class ReviewForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.radioButtons = this.radioButtons.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  


  radioButtons(){

  }
}

export default ReviewForm;