class CollectionSerializer < ActiveModel::Serializer
    attributes :id
    belongs_to :user
    has_many :artworks
  end