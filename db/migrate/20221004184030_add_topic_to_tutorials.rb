class AddTopicToTutorials < ActiveRecord::Migration[7.0]
  def change
    add_column :tutorials, :topic, :string
  end
end
