import { fetchListing } from '../../actions/listing_actions';
import { connect } from 'react-redux';
import ListingShow from './listing_show';
import {amenitySelector} from '../../util/selectors';


const mapStatetoProps = (state, ownProps) => {
  const listing = state.entities.listings[ownProps.match.params.listingId]
  return {
    listing,
    amenities: amenitySelector(state, listing)
  }
}

const mapDispatchtoProps = dispatch => ({
  fetchListing: listingId => dispatch(fetchListing(listingId))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(ListingShow)