class Review < ApplicationRecord 
  validates :body, :rating, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :booking,
    foreign_key: :booking_id,
    class_name: :Booking

  has_one :listing,
    through: :booking,
    source: :listing
 # get owner's name
  has_one :subject,
    through: :listing,
    source: :owner

end