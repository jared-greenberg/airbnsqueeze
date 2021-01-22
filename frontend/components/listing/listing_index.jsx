import React from 'react';
import ListingIndexItem from './listing_index_item';
import MapDisplay from '../map/map_display';
import {isEqual} from 'lodash';
import Link from 'react-router-dom';

class ListingIndex extends React.Component {

    
    componentDidMount() {
      this.props.fetchListings(this.props.query);
    }

    componentDidUpdate(prevProps) {
      if (!isEqual(prevProps.query, this.props.query)){
        this.props.fetchListings(this.props.query);
      }
    }

    locationLinks(){
      return ["Ithaca, NY", "Boulder, CO", "Santa Cruz, CA"].map((loc, i) => (
        <li className="notfound-link" key={i} 
            onClick={() => this.props.startQuery({...this.props.query, ["location"]: loc, ["region"]: {}})}
        >
          {loc}
        </li>
      ))
    }

   

    render() {
      const listingIndexItems = this.props.listings.map(listing => {
        return <ListingIndexItem key={listing.id} listing={this.props.listings[0]} 
                  history={this.props.history} 
                  amenities={this.props.amenities}
                   />
    })
      const numListings = this.props.listings.length
      return (
      <>
        <main className="listing-index-main">
            <section className="listing-index-container">
              <h1>{numListings}  Tiny Home Stays </h1>
              {numListings !== 0 ? null : (
                <ul>
                  <h3>Why don't you try . . .</h3>
                  {this.locationLinks.call(this)}
                </ul>
              )}
              <ul>
                {listingIndexItems}
              </ul>
            </section>
            <section className="index-map">
              <MapDisplay query={this.props.query}
                listings = {this.props.listings}
                type={this.props.type} 
                history={this.props.history}
                startQuery={this.props.startQuery}
              />
            </section>
        </main>
          
      </>
      )
      
    }


}



export default ListingIndex;