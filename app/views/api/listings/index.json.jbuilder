json.listings do
  @listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :title, :city, :capacity, :price, :latitude, :longitude
      json.avgRating listing.reviews.average("rating").to_f
      json.numReviews listing.reviews.count
      json.amenities listing.amenities.map(&:id)
      json.photoUrls [listing.photos.first.service_url]
    end
  end
end

json.partial! '/api/listings/amenities', amenities: @amenities