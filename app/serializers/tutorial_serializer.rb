class TutorialSerializer < ActiveModel::Serializer
    attributes :id, :title, :topic, :description, :video_url, :user_id
    
    belongs_to :user
  end