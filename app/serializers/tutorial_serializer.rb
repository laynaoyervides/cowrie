class TutorialSerializer < ActiveModel::Serializer
    attributes :id, :title, :topic, :description, :video_url
    
    belongs_to :user
  end