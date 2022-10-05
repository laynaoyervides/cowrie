class AddDescriptionToCollections < ActiveRecord::Migration[7.0]
  def change
    add_column :collections, :description, :string
  end
end
