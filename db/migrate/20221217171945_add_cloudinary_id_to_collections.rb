class AddCloudinaryIdToCollections < ActiveRecord::Migration[7.0]
  def change
    add_column :collections, :cloudinary_public_id, :string

  end
end
