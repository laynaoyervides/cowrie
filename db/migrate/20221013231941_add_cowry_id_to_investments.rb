class AddCowryIdToInvestments < ActiveRecord::Migration[7.0]
  def change
    add_column :investments, :cowry_id, :integer
  end
end
