class CowrySerializer < ActiveModel::Serializer
    attributes :id, :cowry_volume, :current_price

    has_many :invesments
end
