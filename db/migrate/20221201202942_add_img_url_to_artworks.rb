class AddImgUrlToArtworks < ActiveRecord::Migration[7.0]
  def change
    add_column :artworks, :img_url, :string
  end
end
