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
    window.scrollTo(0,0);
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
              <img src="https://cdn.vox-cdn.com/thumbor/ScgaAKfXjX1yS8VDz8otR1knML4=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/64879883/acastro_170731_1777_0006_v1.0.jpg"/>
          </div>
          <div className="second-column">
              <img src="https://cdn.gobankingrates.com/wp-content/uploads/2019/05/The-Clover-tiny-home-by-Modern-Tiny-Living-03.jpg" alt=""/>
              <img src="https://images.squarespace-cdn.com/content/v1/556def68e4b0fb59709c7d04/1568764939542-0OJAF19OKE4ESY6AHRJS/ke17ZwdGBToddI8pDm48kIBRiB-T2Vc-DvDeDlWcrz17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ktJPZ5nzlpAQ9l-HYKRq6VcITiSGeIF8vSWMvDhw4XET7jN3tI3NiCRnnR0FqlwgA/The+Lupine-63.jpg?format=1500w" alt=""/>
          </div>
            <div className="third-column">
              <img className="other-images" src="https://images.squarespace-cdn.com/content/v1/556def68e4b0fb59709c7d04/1550509859322-QMFWJDVD7SAV88YA9MC4/ke17ZwdGBToddI8pDm48kGHZFXYYKxvxux-9ODB8RsJ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTalY4Dp7HlUSgjMheFrBy3TUBkvwwpBqhdtkGdm-NHbeqqZeDpCGRkOGSOpNiLjqg/valance+light.jpg?format=2500w" alt=""/>
              <img className="other-images" src="https://i.pinimg.com/564x/3e/ac/17/3eac17c5212441466eb063471ba27e59.jpg" alt=""/>
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