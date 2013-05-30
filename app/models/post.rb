class Post < ActiveRecord::Base
  acts_as_taggable
  attr_accessible :text, :tag_list


  def as_json(options = {})
    {
      :id => self.id,
      :text => self.text,
      :created_at => self.created_at,
      :updated_at => self.updated_at,
      :tags => self.tag_list
    }
  end
end
