export const amenitySelector = (state, listing) => {
   if (!listing || !listing.amenities) {return []}
   
   return Object.values(state.entities.amenities)
                .filter(a => listing.amenities.includes(a.id));
    
}