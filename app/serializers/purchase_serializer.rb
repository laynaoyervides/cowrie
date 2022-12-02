class PurchaseSerializer < ActiveModel::Serializer
    attributes :id, :price, :royalty_percentage, :image_thumbnail

    belongs_to :user
    belongs_to :nft
end
