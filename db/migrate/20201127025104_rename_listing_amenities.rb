class RenameListingAmenities < ActiveRecord::Migration[5.2]
  def change
    rename_table :listing_amenities, :tagged_amenities
  end
end
