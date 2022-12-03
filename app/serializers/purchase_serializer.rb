class PurchaseSerializer < ActiveModel::Serializer
    attributes :id, :price, :royalty_percentage, :image_thumbnail, :description

    belongs_to :user
    belongs_to :nft
end
