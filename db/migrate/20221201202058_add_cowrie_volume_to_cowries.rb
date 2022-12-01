class AddCowrieVolumeToCowries < ActiveRecord::Migration[7.0]
  def change
    add_column :cowries, :cowrie_volume, :integer
  end
end
