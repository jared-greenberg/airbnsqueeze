class Listing < ApplicationRecord 

  validates :address, :city, :latitude, :longitude, :title, :price, presence: true
  validates :capacity, numericality: {greater_than_or_equal_to: 1}

  belongs_to :owner,
    foreign_key: :owner_id,
    class_name: :User

  has_many :tagged_amenities,
    foreign_key: :listing_id,
    class_name: :TaggedAmenity
  
  has_many :amenities,
    through: :tagged_amenities,
    source: :amenity
  
  has_many :bookings,
    foreign_key: :listing_id,
    class_name: :Booking

  has_many :reviews,
    through: :bookings,
    source: :review

  has_many_attached :photos

  def self.filter_by_guests(num_guests)
    self.where("capacity >= #{num_guests}")
  end

  def self.filter_by_location(location)
    min_lat, max_lat = location["southwest"]["lat"], location["northeast"]["lat"]
    min_lng, max_lng = location["southwest"]["lng"], location["northeast"]["lng"]
    self.where(latitude: min_lat..max_lat).where(lng: min_lng..max_lng)
  end

  def rating
    self.reviews.average("rating")
  end

end

