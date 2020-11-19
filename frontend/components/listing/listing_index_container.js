import {connect} from 'react-redux';
import ListingIndex from './listing_index';
import { fetchListings } from '../../actions/listing_actions'

const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings),
  amenities: Object.values(state.entities.amenities)
})

const mapDispatchToProps = dispatch => ({
  fetchListings: (listings) => dispatch((fetchListings()))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);

