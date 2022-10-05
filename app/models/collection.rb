class Collection < ApplicationRecord
    belongs_to :users
    has_many :artworks
end