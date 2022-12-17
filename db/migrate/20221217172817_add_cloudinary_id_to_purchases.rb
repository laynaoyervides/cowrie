class AddCloudinaryIdToPurchases < ActiveRecord::Migration[7.0]
  def change
    add_column :purchases, :cloudinary_public_id, :string

  end
end
