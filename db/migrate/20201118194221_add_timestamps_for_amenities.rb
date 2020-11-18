class AddTimestampsForAmenities < ActiveRecord::Migration[5.2]
  def change
    add_column :listing_amenities, :created_at, :datetime, null: false
    add_column :listing_amenities, :updated_at, :datetime, null: false
  end
end
