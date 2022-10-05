class AddTitleToCollections < ActiveRecord::Migration[7.0]
  def change
    add_column :collections, :title, :string
  end
end
