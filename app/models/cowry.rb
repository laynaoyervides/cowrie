class Cowry < ActiveRecord::Base
    has_many :investments
    has_many :users, through :investments
end