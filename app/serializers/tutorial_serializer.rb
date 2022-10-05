class TutorialSerializer < ActiveModel::Serializer
    attributes :id, :title, :topic, :description
    belongs_to :user
  end