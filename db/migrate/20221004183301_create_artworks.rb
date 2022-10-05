class CreateArtworks < ActiveRecord::Migration[7.0]
  def change
    create_table :artworks do |t|

      t.timestamps
    end
  end
end
