class Listing < ApplicationRecord 

  validates :address, :city, :latitude, :longitude, :title, :price, presence: true
  validates :capacity, numericality: {greater_than_or_equal_to: 1}

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :amenity_pairings,
    foreign_key: :listing_id,
    class_name: :ListingAmenity
  
  has_many :amenities,
    through: :amenity_pairings,
    source: :amenity
  
  has_many :bookings,
    foreign_key: :listing_id,
    class_name: :Booking

  has_many :reviews,
    through: :bookings,
    source: :reviews

  has_many_attached :photos

  def self.filter_by_guests(num_guests)
    self.where("capacity >= #{num_guests}")
  end

  def self.filter_by_region(region)
    min_lat, max_lat = region["southwest"]["lat"], region["northeast"]["lat"]
    min_lng, max_lng = region["southwest"]["lng"], region["northeast"]["lng"]
    self.where(latitude: min_lat..max_lat).where(lng: min_lng..max_lng)
  end

end

