class AddForSaleToArtworks < ActiveRecord::Migration[7.0]
  def change
    add_column :artworks, :for_sale, :boolean, default:false
  end
end
