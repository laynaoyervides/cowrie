class AddVideoUrlToTutorials < ActiveRecord::Migration[7.0]
  def change
    add_column :tutorials, :video_url, :string
  end
end
