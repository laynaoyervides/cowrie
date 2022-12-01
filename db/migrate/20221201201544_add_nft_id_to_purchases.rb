class AddNftIdToPurchases < ActiveRecord::Migration[7.0]
  def change
    add_column :purchases, :nft_id, :integer
  end
end
