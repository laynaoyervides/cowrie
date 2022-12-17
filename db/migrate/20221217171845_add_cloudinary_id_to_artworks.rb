class AddCloudinaryIdToArtworks < ActiveRecord::Migration[7.0]
  def change
    add_column :artworks, :cloudinary_public_id, :string
  end
end
