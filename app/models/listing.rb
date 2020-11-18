class Listing < ApplicationRecord 

  validates :address, :city, :latitude, :longitude, :title, :price, presence: true
  validates :capacity, numericality: {greater_than_or_equal_to: 1}

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :amenity_pairings,
    foreign_key: :listing_id,
    class_name: :ListingAmenity,
  
  has_many :amenities,
    through: :amenity_pairings,
    source: :amenity

end