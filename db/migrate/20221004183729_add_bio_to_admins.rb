class AddBioToAdmins < ActiveRecord::Migration[7.0]
  def change
    add_column :admins, :bio, :string
  end
end
