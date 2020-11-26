import React from 'react';

class ReviewForm extends React.Component {
  
  constructor(props){
    super(props);
    this.state = this.props.review;
    this.radioButtons = this.radioButtons.bind(this);
    this.handleText = this.handleText.bind(this);
    this.ratingText = this.ratingText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillUnmount(){
    delete window["bookingId"];
    delete window["reviewId"];
  }

  handleDelete(e){
    e.preventDefault();
    
    this.props.deleteReview(this.state.id).then(this.props.closeModal)
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.props.type === "Create") {
      this.props.createReview(this.props.booking.id, this.state).then(() => {
        this.props.closeModal();
        this.props.history.push(`/listings/${this.props.booking.listingId}`);
      })
    }
    else {
      this.props.updateReview(this.state).then(() => {
        this.props.closeModal();
        this.props.history.push(`/listings/${this.props.booking.listingId}`)
      })
    }
   
  }

  

  handleText(e){
    this.setState({body: e.currentTarget.value})
  } 

  ratingText(){
    const options = ["", "Terrible", "Bad", "OK", "Good", "Great"];
    return options[this.state.rating];
  }

  setRating(num){
    this.setState({rating: num})
  }

  radioButtons(){
    const {rating} = this.state;
    return [5, 4, 3, 2, 1].map(i => (
      <>
      <input type="radio" key={`radio-${i}`} id={`radio-${i}`} value={i} onChange={() => this.setRating(i)} checked={i === rating} 
        onClick={() => this.setRating(i)} />
      <label htmlFor={`radio-${i}`} key={`label-${i}`}><i className="fas fa-star fa-2x"></i></label>
      </>
      )
    )
  }

  render() {
      return (
        <form className="review-form" onSubmit={this.handleSubmit}>
          <section className="rating-section">
            <h2>How was your stay at {this.props.booking.hostName}'s place?</h2>
              <h3 className="rating-text">{this.ratingText()}</h3>
            <div className="review-rating">{this.radioButtons()}</div>
          </section>
          <section className="body-section">
            <h2>Write a public review</h2>
            <h4 className="review-instructions">Tell future travelers about what they can expect at {this.props.booking.hostName}'s' place.</h4>
            <textarea id="review-body" value={this.state.body} onChange={this.handleText} 
              placeholder="Write a public review"></textarea>
            </section>
          <div className="review-button">
            {this.props.type === "Create" ? null :
              <button id="delete-review" onClick={this.handleDelete}>Delete</button>}
            <button id="submit-review" disabled={this.state.body === "" || this.state.rating === 0}>Done</button>
          </div>
        </form>
      )
  }
}

export default ReviewForm;