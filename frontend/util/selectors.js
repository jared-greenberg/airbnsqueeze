export const amenitySelector = (state, listing) => {
   if (!listing || !listing.amenities) {return []}
   
   return Object.values(state.entities.amenities)
                .filter(amenity => listing.amenities.includes(amenity.id));
    
}

export const userUpcomingBookings = (bookings, userId) => {
   return bookings.filter(booking => (
            (booking.renterId === parseInt(userId)) && (new Date(booking.startDate) > Date.now())
         )
   )
}
export const userPastBookings = (bookings, userId) => {
   return bookings.filter(booking => (
      (booking.renterId === parseInt(userId)) && (new Date(booking.endDate) < Date.now())
   )
   )
}

export const bookingsListingInfo = (state, bookings) => {
   const listingIds = bookings.map(booking => booking.listingId)
   return Object.values(state.entities.listings).filter(listing =>(
      listingIds.includes(listing.id)
   ))
}


