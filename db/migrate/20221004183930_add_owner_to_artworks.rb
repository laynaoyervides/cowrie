class AddOwnerToArtworks < ActiveRecord::Migration[7.0]
  def change
    add_column :artworks, :owner, :string
  end
end
