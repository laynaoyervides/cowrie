class AddListPriceToArtworks < ActiveRecord::Migration[7.0]
  def change
    add_column :artworks, :list_price, :string
  end
end
