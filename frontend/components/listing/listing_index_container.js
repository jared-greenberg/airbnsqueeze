import {connect} from 'react-redux';
import ListingIndex from './listing_index';

const mapStateToProps = state => {
  listings: state.entities.listings; 
}

const mapDispatchToProps = dispatch => ({
  fetchListings: (listings) => dispatch(fetchListings)
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);

