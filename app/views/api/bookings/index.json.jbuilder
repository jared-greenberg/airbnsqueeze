json.bookings do
  @bookings.each do |booking|
    json.set! booking.id do
      json.extract! booking, :id, :start_date, :end_date, :listing_id
    end
  end
end

json.listings do
  @listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :city, :description
    end
  end
end