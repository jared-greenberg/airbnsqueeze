import React from 'react';
import ListingIndexItem from './listing_index_item';

class ListingIndex extends React.Component {

    
    componentDidMount() {
      this.props.fetchListings();
    }

   

    render() {
      const listingIndexItems = this.props.listings.map(listing => (
        <ListingIndexItem key={listing.id} listing={listing} history={this.props.history} />
      ))

      return (
       <main className="listing-index-main">
          <section className="listing-index-container">
            <h1>{this.props.listings.length}  Tiny Home Stays </h1>
            <ul>
              {listingIndexItems}
            </ul>
          </section>
          <section className="index-map">

          </section>
      </main>
      )
      
    }


}



export default ListingIndex;