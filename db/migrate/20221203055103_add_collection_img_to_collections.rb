class AddCollectionImgToCollections < ActiveRecord::Migration[7.0]
  def change
    add_column :collections, :collection_img, :string
  end
end
