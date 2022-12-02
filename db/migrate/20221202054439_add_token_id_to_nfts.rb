class AddTokenIdToNfts < ActiveRecord::Migration[7.0]
  def change
    add_column :nfts, :token_id, :integer
  end
end
