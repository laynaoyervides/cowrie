class CollectionSerializer < ActiveModel::Serializer
    attributes :id, :title, :description, :collection_img
    
    belongs_to :user
    has_many :artworks
  end