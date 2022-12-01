class AddInvestmentIdToCowries < ActiveRecord::Migration[7.0]
  def change
    add_column :cowries, :investment_id, :integer
  end
end

