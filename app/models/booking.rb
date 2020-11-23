class Booking < ApplicationRecord

  validates :start_date, :end_date, :num_guests, :total_cost, presence: true 
  validates :num_guests, numericality: {greater_than: 1}
  validate :overlapping?

  belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing

  belongs_to :renter,
    foreign_key: :listing_id,
    class_name: :User

  def overlapping?
    same_place = self.class.where(listing_id: self.listing_id)
    return if same_place.count == 0
    
    overlaps = same_place.where("end_date > ? AND start_date < ?", self.start_date, self.end_date).count
    if overlaps > 0
      errors.add(:base, "There is a booking conflict. Please try changing your dates")
    end
  end

end