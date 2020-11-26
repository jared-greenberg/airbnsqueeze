import {connect} from 'react-redux';
import ListingIndex from './listing_index';
import { fetchListings } from '../../actions/listing_actions'

const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings),
  amenities: Object.values(state.entities.amenities),
  type: "index",
  query: state.ui.query,
})

const mapDispatchToProps = dispatch => ({
  fetchListings: (query) => dispatch((fetchListings(query)))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);

