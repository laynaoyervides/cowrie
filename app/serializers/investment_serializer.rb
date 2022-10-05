class InvestmentSerializer < ActiveModel::Serializer
    attributes :id
    belongs_to :user
    belongs_to :cowry
  end