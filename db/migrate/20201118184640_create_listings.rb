class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :owner_id, null: false;
      t.string :address, null: false;
      t.string :city, null: false;
      t.float :latitude, null: false;
      t.float :longitude, null: false;
      t.string :title, null: false;
      t.string :description, null: false;
      t.integer :capacity, null: false;
    end

    add_index :listings, :owner_id
  end
end
