json.listings do
  @listings.each do |listing|
    json.set! listing.id do
      json.extract! listing, :id, :title, :city, :capacity, :price, :latitude, :longitude
      json.amenities listing.amenities.map(&:id)
    end
  end
end

json.partial! '/api/listings/amenities', amenities: @amenities