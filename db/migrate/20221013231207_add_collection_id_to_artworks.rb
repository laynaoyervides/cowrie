class AddCollectionIdToArtworks < ActiveRecord::Migration[7.0]
  def change
    add_column :artworks, :collection_id, :integer
  end
end
