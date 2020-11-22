import React from 'react';
import ListingIndexItem from './listing_index_item';
import MapDisplay from '../map/map_display';

class ListingIndex extends React.Component {

    
    componentDidMount() {
      this.props.fetchListings(this.props.query);
    }

    componentDidUpdate(prevProps) {
      if (prevProps.query !== this.props.query){
        this.props.fetchListings(this.props.query);
      }
    }

   

    render() {
      const listingIndexItems = this.props.listings.map(listing => {
        return <ListingIndexItem key={listing.id} listing={listing} 
                  history={this.props.history} amenities={this.props.amenities} />
    })

      return (
      <>
        <main className="listing-index-main">
            <section className="listing-index-container">
              <h1>{this.props.listings.length}  Tiny Home Stays </h1>
              <ul>
                {listingIndexItems}
              </ul>
            </section>
            <section className="index-map">
              <MapDisplay center={{ lat: 40.790379, lng: -74.256916}}
                listings = {this.props.listings}
                type={this.props.type} />
            </section>
        </main>
          
      </>
      )
      
    }


}



export default ListingIndex;