class AddCowryVolumeToCowries < ActiveRecord::Migration[7.0]
  def change
    add_column :cowries, :cowry_volume, :integer
  end
end
