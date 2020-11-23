import * as ListingsApiUtils from '../util/listings_api_util';

export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';

export const receiveListing = payload => ({
  type: RECEIVE_LISTING,
  payload
})

export const receiveListings = payload => {
  debugger
  return {
  type: RECEIVE_LISTINGS,
  payload
}}

export const fetchListing = listingId => dispatch => {
  return ListingsApiUtils.fetchListing(listingId).then(
    listing => dispatch(receiveListing(listing))
  )
}

export const fetchListings = (query) => dispatch => {
  return ListingsApiUtils.fetchListings(query).then(
    listings => dispatch(receiveListings(listings))
  )

}

