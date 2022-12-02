class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :email, :admin
    
    has_many :investments
    has_many :collections
    has_many :artworks
    has_many :purchases
    has_many :tutorials 
  end