import React from 'react';

class ReviewForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.radioButtons = this.radioButtons.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  componentDidMount(){
    delete window["bookingId"];
    delete window["reviewId"];
  }

  handleText(e){
    this.setState({body: e.currentTarget.value})
  } 

  setRating(num){
    this.setState({rating: num})
  }

  radioButtons(){
    const {rating} = this.state;
    return [5, 4, 3, 2, 1].map(i => (
      <>
      <input type="radio" key={i} id={`radio-${i}`} value={i} onChange={() => this.setRating(i)} checked={i === rating} 
        onClick={() => this.setRating(i)} />
      <label htmlFor={`radio-${i}`}><i class="fas fa-star fa-2x"></i></label>
      </>
      )
    )
  }

  render() {
      return (
        <form className="review-form">
          <section className="rating-section">
            <h2>How was your stay at {this.props.booking.hostName}'s place?</h2>
            <div className="review-rating">{this.radioButtons()}</div>
          </section>
          <section className="body-section">
            <h2>Write a public review</h2>
            <h4 className="review-instructions">Tell future travelers about what they can expect at {this.props.booking.hostName}'s' place.</h4>
            <textarea id="review-body" value={this.state.body} onChange={this.handleText} 
              placeholder="Write a public review"></textarea>
            </section>
          <div className="review-button">
            <button id="submit-review" disabled={this.state.body === ""}>Done</button>
          </div>
        </form>
      )
  }
}

export default ReviewForm;