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
        
        <img src="https://cdn.vox-cdn.com/thumbor/ScgaAKfXjX1yS8VDz8otR1knML4=/0x0:2040x1360/1200x800/filters:focal(857x517:1183x843)/cdn.vox-cdn.com/uploads/chorus_image/image/64879883/acastro_170731_1777_0006_v1.0.jpg" alt=""/>
      
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
            <p>Rating</p>
            <p><strong>${listing.price}</strong> / night</p>
          </section>
      
        </div>
      </li>
      )
  }
}


export default ListingIndexItem;

