class AddCloudinaryIdToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :cloudinary_public_id, :string

  end
end
