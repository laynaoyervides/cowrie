class AddAdminIdToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :admin_id, :integer
  end
end
