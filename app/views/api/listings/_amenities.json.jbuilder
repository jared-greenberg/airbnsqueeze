json.amenities do 
  amenities.each do |amenity| 
    json.set! amenity.id do 
      json.extract! amenity, :id, :name, :icon_path
    end
  end
end