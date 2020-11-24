import moment from 'moment';

export const amenitySelector = (state, listing) => {
   if (!listing || !listing.amenities) {return []}
   
   return Object.values(state.entities.amenities)
                .filter(amenity => listing.amenities.includes(amenity.id));
    
}

export const userUpcomingBookings = (bookings, userId) => {
  
   return bookings.filter(booking => (
          (booking.renterId === parseInt(userId)) && (new Date(booking.startDate) > new Date(moment()))
      )
   )
}
export const userPastBookings = (bookings, userId) => {
   return bookings.filter(booking => (
         (booking.renterId === parseInt(userId)) && (new Date(booking.startDate) <= new Date(moment()))
      )
   )
}

export const bookingsListingInfo = (state, bookings) => {
   const listingIds = bookings.map(booking => booking.listingId)
   const listings = {};
   listingIds.forEach(id => listings[id] = state.entities.listings[id] )
   return listings;
}




