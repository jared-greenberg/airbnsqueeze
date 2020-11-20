import React from 'react';
import ListingIndexItem from './listing_index_item';
import NavBar from '../nav/nav_bar'
import MapDisplay from '../map/map_display';

class ListingIndex extends React.Component {

    
    componentDidMount() {
      this.props.fetchListings();
    }

   

    render() {
      const listingIndexItems = this.props.listings.map(listing => {
        return <ListingIndexItem key={listing.id} listing={listing} 
                  history={this.props.history} amenities={this.props.amenities} />
    })

      return (
      <>
        <NavBar fixed={true} />
        <main className="listing-index-main">
            <section className="listing-index-container">
              <h1>{this.props.listings.length}  Tiny Home Stays </h1>
              <ul>
                {listingIndexItems}
              </ul>
            </section>
            <section className="index-map">
              <MapDisplay latitude={40.837956} longitude={-74.437431}
                type={this.props.type} />
            </section>
        </main>
          
      </>
      )
      
    }


}



export default ListingIndex;