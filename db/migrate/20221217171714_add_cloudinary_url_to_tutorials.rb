class AddCloudinaryUrlToTutorials < ActiveRecord::Migration[7.0]
  def change
    add_column :tutorials, :cloudinary_public_id, :string
  end
end
