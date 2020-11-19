
json.extract! @listing, :id, :title, :description, :address, :city, :capacity
json.photos do
  @listing.photos.map {|photo| url_for(photo)}
end
