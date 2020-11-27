class ChangeTypeOfCost < ActiveRecord::Migration[5.2]
  def change
    change_column :bookings, :total_cost, :float
  end
end
