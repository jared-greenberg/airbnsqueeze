
export const fetchListing = listingId => {
  return $.ajax({
    method: 'GET',
    url: `/api/listings/${listingId}`
  })
}

export const fetchListings = (query) => {
  return $.ajax({
    method: 'GET',
    url: '/api/listings',
    data: query
  })
}