class AddKeywordsToArtworks < ActiveRecord::Migration[7.0]
  def change
    add_column :artworks, :keywords, :string
  end
end
