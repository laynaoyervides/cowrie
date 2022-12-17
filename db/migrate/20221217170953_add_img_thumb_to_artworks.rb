class AddImgThumbToArtworks < ActiveRecord::Migration[7.0]
  def change
    add_column :artworks, :img_thumb, :string
  end
end
