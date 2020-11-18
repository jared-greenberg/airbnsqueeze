class ListingAmenity < ApplicationRecord 
  validates: :amenity_id, uniqueness: {scope: :listing_id}

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing

  belongs_to :amenity,
    foreign_key: :amenity_id,
    class_name: :Amenity
  
end
