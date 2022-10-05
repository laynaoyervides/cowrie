class CreateInvestments < ActiveRecord::Migration[7.0]
  def change
    create_table :investments do |t|

      t.timestamps
    end
  end
end
