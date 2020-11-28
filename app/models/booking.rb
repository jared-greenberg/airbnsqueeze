class Booking < ApplicationRecord

  validates :num_guests, :total_cost, presence: true
  validates_presence_of :start_date, :end_date, message: "You must choose a start and end date"
  validate :overlapping?

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing 

  belongs_to :renter,
    foreign_key: :renter_id,
    class_name: :User

  has_one :review,
    foreign_key: :booking_id,
    class_name: :Review

  has_one :host,
    through: :listing,
    source: :owner

  
  def overlapping?
    same_place = self.class.where(listing_id: self.listing_id)
    return if same_place.count == 0
    
    overlaps = same_place.where("end_date > ? AND start_date < ?", self.start_date, self.end_date).count
    if overlaps > 0
      errors.add(:base, "There is a booking conflict. Please try changing your dates")
    end
  end

end