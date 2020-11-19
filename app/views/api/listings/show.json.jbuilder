
json.listing do
  json.set! @listing.id do
    json.extract! @listing, :id, :title, :capacity, :price, :title, :city, :latitude, :longitude
    json.amenities @listing.amenities.map(&:id)
  end
end

json.partial! '/api/listings/amenities', amenities: @listing.amenities

json.photos do
  @listing.photos.map {|photo| url_for(photo)}
end

