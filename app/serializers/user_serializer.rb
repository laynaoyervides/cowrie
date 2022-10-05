class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :password_digest
    belongs_to :admin
    has_many :cowries
    has_many :investments
    has_many :collections
    has_many :artworks
    has_many :nfts 
    has_many :tutorials 
  end