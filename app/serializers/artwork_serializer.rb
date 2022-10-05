class ArtworkSerializer < ActiveModel::Serializer
    attributes :id
    belongs_to :collection
  end