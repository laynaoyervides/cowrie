class AddTitleToTutorials < ActiveRecord::Migration[7.0]
  def change
    add_column :tutorials, :title, :string
  end
end
