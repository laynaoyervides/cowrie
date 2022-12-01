class AddUserIdToPurchases < ActiveRecord::Migration[7.0]
  def change
    add_column :purchases, :user_id, :integer
  end
end
