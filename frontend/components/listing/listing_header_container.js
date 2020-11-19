import { fetchListing } from '../../actions/listing_actions';
import { connect } from 'react-redux';
import ListingHeader from './listing_header';


const mapStatetoProps = (state, ownProps) => ({
  listing: state.entities.listings[ownProps.match.params.listingId]
})

const mapDispatchtoProps = dispatch => ({
  fetchListing: listingId => dispatch(fetchListing(listingId))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(ListingHeader)