import React from 'react';


class ListingIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.amenityList = this.amenityList.bind(this);
  }

  handleClick(){
    this.props.history.push(`/listings/${this.props.listing.id}`)
  }

  amenityList(){
    const {listing, amenities} = this.props;
    if (!listing.amenities) {return null};
    return amenities.filter(a => listing.amenities.slice(0,3).includes(a.id))
                    .map(a => a.name)
                    .join(' \u00B7 ');
  }


  render () {

    const {listing} = this.props

    return (
      <li onClick={this.handleClick} className="listing-item" >
        
        <img loading="lazy" src={listing.photoUrls[0]} />

        <div className='index-text'>
      
          <section className="index-text-top">
            <p>Tiny Home in {listing.city}</p>
            <h3>{listing.title}</h3>
          </section>
      
          <section className="index-text-middle">
            <p>{listing.capacity} guests</p>
            <p>{this.amenityList()}</p>
          </section>
      
          <section className="index-text-bottom">
            {!listing.numReviews || listing.numReviews === 0 ? <p></p>:
              <p><i className="fas fa-star fa-lg"></i> <strong>{listing.avgRating.toFixed(2)}</strong>
                  <span>({listing.numReviews})</span></p>
            }
              <p id="index-price"><strong>${listing.price}</strong> / night</p>
          </section>
      
        </div>
      </li>
      )
  }
}


export default ListingIndexItem;

