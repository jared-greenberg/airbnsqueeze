import React from 'react';
import Amenities from './amenities';
import MapDisplay from '../map/map_display';
import BookingFormContainer from '../bookings/booking_form_container';
import ReviewIndex from '../reviews/review_index';


class ListingShow extends React.Component {

  constructor(props) {
    super(props);
    this.center = this.center.bind(this);
  }

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
    if (this.props.location.hash !== ""){
      const ele = document.querySelector(this.props.location.hash);
      ele.scrollIntoView();
    }
    else {
        window.scrollTo(0, 0);
    }
      
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.listingId !== this.props.match.params.listingId) {
      this.props.fetchListing(this.props.match.params.listingId);
    }
  }
  

  center() {
    const {listing} = this.props;
    return {lat: listing.latitude, lng: listing.longitude}
  }

  render() {
    const {listing, avgRating, reviews} = this.props;

    if (!listing) return null;
    
    return (
    <>
      <section className="listing-show">
        <h1>{listing.title}</h1>
        <div className="sub-header">
          { avgRating > 0 ? (
              <span>
                <i className="fas fa-star"></i>
                <strong>{avgRating}</strong> 
                <span>({reviews.length})</span>    
                {'\u00B7'}
              </span>
          ) : null }
          <span>{listing.city}</span>
        </div>
        <section className="img-container">
          <div className="big-image">
            <img src={listing.photoUrls[0]}/>
          </div>
          <div className="second-column">
              <img src={listing.photoUrls[1]}/>
              <img src={listing.photoUrls[2]}/>
          </div>
            <div className="third-column">
              <img src={listing.photoUrls[3]}/>
              <img src={listing.photoUrls[4]}/>
            </div>
        </section>
        { this.props.owner ? (
        <h2>Tiny House hosted by {this.props.owner.first_name}</h2>) : null
        }
        <h3>{listing.capacity} guests</h3>
        <section className="listing-description">
          <p>{listing.description}</p>
          <p><strong>Note:</strong>You only need to bring the essentials. All of the tiny homes on Airbnsqueeze are required to provide everything else. Each
            owner will email you a list of instructions on how to use water/energy resources for your stay.</p>
        </section>
        <BookingFormContainer match={this.props.match} history={this.props.history} price={listing.price} 
        capacity = {listing.capacity}/>
        <Amenities amenities={this.props.amenities} listing={listing}/>
        <ReviewIndex avgRating={this.props.avgRating} reviews={this.props.reviews} currentUser={this.props.currentUser}/>
        <MapDisplay coords={this.center()} listings={[listing]} type={this.props.type}/>
      </section>
    </>
    )
    
  }
}

export default ListingShow;