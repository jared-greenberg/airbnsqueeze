class ChangeCosttoTotalCost < ActiveRecord::Migration[5.2]
  def change
    rename_column :bookings, :cost, :total_cost
  end
end
