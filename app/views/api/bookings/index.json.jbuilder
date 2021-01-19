@bookings.each do |booking|
  json.bookings do
    json.set! booking.id do
      json.id booking.id
      json.startDate booking.start_date
      json.endDate booking.end_date
      json.listingId booking.listing_id
      json.renterId booking.renter_id
      json.hostName booking.host.first_name
      if booking.review
        json.reviewId booking.review.id
      end
    end
  end
end

json.listings do
  @listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :city, :title, :latitude, :longitude, :price
      json.photoUrls [(listing.photos.first.service_url)]
    end
  end
end