json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.id booking.id
      json.startDate booking.start_date
      json.endDate booking.end_date
      json.listingId booking.listing_id
      json.renterId booking.renter_id
    end
  end
end

json.listings do
  @listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :city, :title
    end
  end
end