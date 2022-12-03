class ArtworkSerializer < ActiveModel::Serializer
    attributes :id, :title, :date_created, :list_price, :owner, :img_url, :for_sale, :keywords
  end