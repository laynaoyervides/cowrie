class ArtworkSerializer < ActiveModel::Serializer
    attributes :id, :collection_id, :title, :date_created, :list_price, :owner, :img_url, :for_sale, :keywords, :img_thumb
  end