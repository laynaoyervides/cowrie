class Investment < ActiveRecord::Base
    belongs_to :user
    belongs_to :cowry

end