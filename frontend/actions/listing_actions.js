import * as ListingsApiUtils from '../util/listings_api_util';

export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';

export const receiveListing = payload => ({
  type: RECEIVE_LISTING,
  payload
})

export const receiveListings = listings => ({
  type: RECEIVE_LISTINGS,
  listings
})

export const fetchListing = listingId => dispatch => {
  return ListingsApiUtils.fetchListing(listingId).then(
    listing => dispatch(receiveListing(listing))
  )
}

export const fetchListings = () => dispatch => {
  return ListingsApiUtils.fetchListings().then(
    listings => dispatch(receiveListings(listings))
  )

}

