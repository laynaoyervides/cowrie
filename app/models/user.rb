class User < ActiveRecord::Base
    has_secure_password
    validates :username, presence: true, uniqueness:true
   
    belongs_to :admin
    has_many :investments
    has_many :collections
    has_many :tutorials
    has_many :nfts
    has_many :cowries, through: :investments
end