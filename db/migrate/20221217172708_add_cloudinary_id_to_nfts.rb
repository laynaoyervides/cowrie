class AddCloudinaryIdToNfts < ActiveRecord::Migration[7.0]
  def change
    add_column :nfts, :cloudinary_public_id, :string

  end
end
