class AddAmountToInvestments < ActiveRecord::Migration[7.0]
  def change
    add_column :investments, :amount, :integer
  end
end
