class Amenity < ApplicationRecord

  validates :name, :icon_path, presence: true

  has_many :listing_pairings,
    foreign_key: :amenity_id,
    class_name: :TaggedAmenity

  has_many :listings,
    through: :listing_pairings,
    source: :listing

end