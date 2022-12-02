class User < ActiveRecord::Base
    has_secure_password
    validates :username, presence: true, uniqueness:true
   
    has_many :investments
    has_many :collections
    has_many :tutorials
    has_many :purchases
    has_many :nfts, through: :purchases
    has_many :cowries, through: :investments
end