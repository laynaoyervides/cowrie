class CreateCowries < ActiveRecord::Migration[7.0]
  def change
    create_table :cowries do |t|

      t.timestamps
    end
  end
end
