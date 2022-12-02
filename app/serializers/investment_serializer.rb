class InvestmentSerializer < ActiveModel::Serializer
    attributes :id, :amount
    belongs_to :user
    belongs_to :cowry
  end