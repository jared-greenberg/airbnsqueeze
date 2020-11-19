import * as ListingsApiUtils from '../util/listings_api_util';

export const RECEIVE_LISTING = 'RECEIVE_LISTING';

export const receiveListing = payload => ({
  type: RECEIVE_LISTING,
  payload
})

export const fetchListing = listingId => dispatch => {
  return ListingsApiUtils.fetchListing(listingId).then(
    listing => dispatch(receiveListing(listing))
  )
}

