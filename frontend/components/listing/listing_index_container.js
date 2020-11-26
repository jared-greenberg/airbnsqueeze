import {connect} from 'react-redux';
import ListingIndex from './listing_index';
import { fetchListings } from '../../actions/listing_actions'
import {startQuery} from '../../actions/query_actions';

const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings),
  amenities: Object.values(state.entities.amenities),
  type: "index",
  query: state.ui.query,
})

const mapDispatchToProps = dispatch => ({
  fetchListings: (query) => dispatch((fetchListings(query))),
  startQuery: (query) => dispatch(startQuery(query))
})

export default connect(mapStateToProps, mapDispatchToProps)(ListingIndex);

