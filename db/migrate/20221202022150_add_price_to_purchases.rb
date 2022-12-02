class AddPriceToPurchases < ActiveRecord::Migration[7.0]
  def change
    add_column :purchases, :price, :integer
  end
end
