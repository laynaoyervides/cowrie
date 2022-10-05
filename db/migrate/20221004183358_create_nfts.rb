class CreateNfts < ActiveRecord::Migration[7.0]
  def change
    create_table :nfts do |t|

      t.timestamps
    end
  end
end
