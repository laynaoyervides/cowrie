class AddDateCreatedToArtworks < ActiveRecord::Migration[7.0]
  def change
    add_column :artworks, :date_created, :string
  end
end
