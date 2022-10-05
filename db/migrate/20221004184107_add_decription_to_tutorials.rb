class AddDecriptionToTutorials < ActiveRecord::Migration[7.0]
  def change
    add_column :tutorials, :description, :string
  end
end
