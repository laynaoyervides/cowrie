class NftSerializer < ActiveModel::Serializer
    attributes :id
    has_many :purchases
  end