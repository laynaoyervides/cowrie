class CowrySerializer < ActiveModel::Serializer
    attributes :id, :cowry_volume

    has_many :invesments
end
