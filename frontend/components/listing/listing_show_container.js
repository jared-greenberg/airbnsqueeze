import { fetchListing } from '../../actions/listing_actions';
import { connect } from 'react-redux';
import ListingShow from './listing_show';
import {amenitySelector} from '../../util/selectors';


const mapStatetoProps = (state, ownProps) => {
  const listing = state.entities.listings[ownProps.match.params.listingId]
  const owner = !!listing ? state.entities.users[listing.ownerId] : {}
  return {
    listing,
    amenities: amenitySelector(state, listing),
    owner,
    type: "show"
  }
}

const mapDispatchtoProps = dispatch => ({
  fetchListing: listingId => dispatch(fetchListing(listingId))
})

export default connect(mapStatetoProps, mapDispatchtoProps)(ListingShow)