class AddImageThumbnailToPurchases < ActiveRecord::Migration[7.0]
  def change
    add_column :purchases, :image_thumbnail, :string
  end
end
