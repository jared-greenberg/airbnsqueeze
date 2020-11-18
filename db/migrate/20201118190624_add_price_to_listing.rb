class AddPriceToListing < ActiveRecord::Migration[5.2]
  def change
    add_column :listings, :price, :float, null: false
  end
end
