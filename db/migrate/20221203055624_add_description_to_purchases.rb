class AddDescriptionToPurchases < ActiveRecord::Migration[7.0]
  def change
    add_column :purchases, :description, :string
  end
end
