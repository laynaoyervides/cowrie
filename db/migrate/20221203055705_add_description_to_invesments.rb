class AddDescriptionToInvesments < ActiveRecord::Migration[7.0]
  def change
    add_column :investments, :description, :string
  end
end
