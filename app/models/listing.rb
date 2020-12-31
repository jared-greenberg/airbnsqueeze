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

  def self.filter_by_region(region)
    min_lat, max_lat = region["southwest"]["lat"].to_f, region["northeast"]["lat"].to_f
    min_lng, max_lng = region["southwest"]["lng"].to_f, region["northeast"]["lng"].to_f
    self.where(latitude: min_lat..max_lat).where(longitude: min_lng..max_lng)
  end

  def rating
    self.reviews.average("rating")
  end

end

