class InvestmentSerializer < ActiveModel::Serializer
    attributes :id, :amount, :description
    belongs_to :user
    belongs_to :cowry
  end