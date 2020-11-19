import { $CombinedState } from "redux"

export const fetchListing = listingId => {
  return $.ajax({
    method: 'GET',
    url: `/api/listings/${listingId}`
  })
}