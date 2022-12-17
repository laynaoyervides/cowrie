class CollectionSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :collection_img, :user_id
    
    belongs_to :user
    has_many :artworks
  end