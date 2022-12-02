class AddRoyaltyPercentageToPurchases < ActiveRecord::Migration[7.0]
  def change
    add_column :purchases, :royalty_percentage, :integer, default:10
  end
end
