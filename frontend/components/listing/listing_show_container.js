import { fetchListing } from '../../actions/listing_actions';
import { connect } from 'react-redux';
import ListingShow from './listing_show';
import {amenitySelector} from '../../util/selectors';


const mapStatetoProps = (state, ownProps) => {
  debugger
  const listing = state.entities.listings[ownProps.match.params.listingId]
  return {
    listing,
    amenities: amenitySelector(state, listing),
    owner: listing ? state.entities.users[listing.ownerId] : {}
  }
}

const mapDispatchtoProps = dispatch => ({
  fetchListing: listingId => dispatch(fetchListing(listingId))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(ListingShow)