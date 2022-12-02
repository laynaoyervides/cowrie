class NftSerializer < ActiveModel::Serializer
    attributes :id, :token_id, :image
    has_many :purchases
  end