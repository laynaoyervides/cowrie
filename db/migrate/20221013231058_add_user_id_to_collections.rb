class AddUserIdToCollections < ActiveRecord::Migration[7.0]
  def change
    add_column :collections, :user_id, :integer
  end
end
