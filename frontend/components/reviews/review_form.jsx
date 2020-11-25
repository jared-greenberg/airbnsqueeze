import React from 'react';

class ReviewForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.radioButtons = this.radioButtons.bind(this);
  }

  componentWillUnmount(){
    delete window["bookingId"];
    delete window["reviewId"];
  }

  setRating(num){
    this.setState({rating: num})
  }

  radioButtons(){
    const {rating} = this.state;
    return [1, 2, 3, 4, 5].map(i => (
      <input type="radio" className={`radio-${i}`} checked={i === rating} 
        onClick={() => this.setRating(i)} />
      )
    )
  }

  render() {
      return (
      <div className="review-form">
        <h1>How was your stay at {} </h1>
        <section className="review-rating">{this.radioButtons()}</section>
        
        <textarea value={this.state.body}></textarea>

      </div>
      )
  }
}

export default ReviewForm;