class AddUserIdToInvestments < ActiveRecord::Migration[7.0]
  def change
    add_column :investments, :user_id, :integer
  end
end
