class AdminSerializer < ActiveModel::Serializer
    attributes :id, :username
    has_many :users 
  end