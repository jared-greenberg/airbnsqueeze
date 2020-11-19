
json.listing do
  json.set! @listing.id do
    json.extract! @listing, :id, :title, :capacity, :price, :title
    json.amenities @listing.amenities.map(&:id)
  end
end
json.amenities do 
  @listing.amenities.each do |amenity| 
    json.set! amenity.id do 
      json.extract! amenity, :id, :name, :icon_path
    end
  end
end

json.photos do
  @listing.photos.map {|photo| url_for(photo)}
end

