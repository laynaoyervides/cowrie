class AddImgThumbToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :img_thumb, :string
  end
end
