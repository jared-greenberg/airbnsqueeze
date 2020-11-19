
export const fetchListing = listingId => {
  return $.ajax({
    method: 'GET',
    url: `/api/listings/${listingId}`
  })
}

export const fetchListings = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/listings'
  })
}