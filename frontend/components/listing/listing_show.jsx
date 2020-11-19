import React from 'react';
import Amenities from './amenities';

class ListingShow extends React.Component {

  componentDidMount() {
    this.props.fetchListing(this.props.match.params.listingId);
  }

  componentDidUpdate(prevProps){
    if (prevProps.match.params.listingId !== this.props.match.params.listingId) {
      this.props.fetchListing(this.props.match.params.listingId);
    }
  }

  render() {
    const {listing} = this.props;
    if (!listing) return null;
    return (
    <>
      <section className="listing-header">
        <h1>{listing.title}</h1>
        <div className="sub-header">
          <span>(Rating)</span>
          <span>{'\u00B7'}</span>
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
        <h2>Tiny House hosted by (Host name)</h2>
        <h3>{listing.capacity} guests</h3>
        <Amenities amenities={this.props.amenities} listing={listing}/>
      </section>
      {/* <Reviews /> */}
    </>
    )
    
  }
}

export default ListingShow;