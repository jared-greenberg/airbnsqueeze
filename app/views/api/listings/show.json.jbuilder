
json.listing do
  json.set! @listing.id do
    json.extract! @listing, :id, :title, :capacity, :price, :title, :city, :latitude, :longitude, :description
    json.ownerId @listing.owner_id
    json.amenities @listing.amenities.map(&:id)
  end
end

json.user do
    json.partial! '/api/users/user/', user: @listing.owner
end

json.partial! '/api/listings/amenities', amenities: @listing.amenities

json.photos do
  @listing.photos.map {|photo| url_for(photo)}
end

json.reviews do
  @listing.reviews.each do |review|
    json.set! review.id do
      json.partial! '/api/reviews/review', review: review
    end
  end
end

