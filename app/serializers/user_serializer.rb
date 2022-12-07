class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :email, :admin, :image_url, :bio
    
    has_many :investments
    has_many :collections
    has_many :purchases
    has_many :tutorials 
  end